import fs from "fs";
import path from "path";

const outDir = path.resolve("out");
const oldNext = path.join(outDir, "_next");
const newNext = path.join(outDir, "next");

console.log("🛠 Running fix-extension.js...");

// 1️⃣ Rename _next → next (safe version)
if (fs.existsSync(oldNext)) {
  try {
    fs.renameSync(oldNext, newNext);
    console.log("✅ Renamed _next → next");
  } catch (err) {
    console.warn("⚠️ Could not rename _next → next (probably locked by Chrome). Copying instead...");
    fs.cpSync(oldNext, newNext, { recursive: true });
  }
} else {
  console.warn("⚠️ No _next folder found directly under out/");
}


// 2️⃣ Clean any nested _next folders (just in case)
function removeNestedUnderscoreNext(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith("_next")) {
        try {
          fs.rmSync(full, { recursive: true, force: true });
          console.log(`🧹 Deleted nested ${full}`);
        } catch {
          console.warn(`⚠️ Could not delete ${full} — possibly locked by Chrome.`);
        }
      } else {
        removeNestedUnderscoreNext(full);
      }
    }
  }
}
removeNestedUnderscoreNext(outDir);

// 3️⃣ Copy your extension folder (manifest.json, etc.)
const extensionDir = path.resolve("extension");
if (fs.existsSync(extensionDir)) {
  fs.cpSync(extensionDir, outDir, { recursive: true });
  console.log("✅ Copied extension folder (including manifest.json) to out/");
} else {
  console.error("❌ No extension folder found!");
}

console.log("✨ Fix complete!");
