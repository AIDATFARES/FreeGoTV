const fs = require("fs");
const path = require("path");

function walkSync(dir, filelist = []) {
  if (!fs.existsSync(dir)) return filelist;
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      if (!["node_modules", ".git", ".next", "public"].includes(file)) {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      if (dirFile.endsWith(".tsx") || dirFile.endsWith(".ts") || dirFile.endsWith(".css")) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
}

const files = walkSync("src");
let modifiedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, "utf8");
  const original = content;

  // 1. Replace #E66000 (old orange hover) → #0C8CE9 (darker sky blue)
  content = content.replace(/#E66000/gi, "#0C8CE9");

  // 2. Replace rgba(255,107,0,...) shadows/glows → rgba(14,165,233,...) sky blue
  content = content.replace(/rgba\(255,\s*107,\s*0,\s*([\d.]+)\)/gi, "rgba(14,165,233,$1)");

  // 3. Replace hover:bg-red-700 → hover:bg-sky-600
  content = content.replace(/hover:bg-red-700/g, "hover:bg-sky-600");

  // 4. Replace border-red-700 → border-sky-600
  content = content.replace(/border-red-700/g, "border-sky-600");

  // 5. Replace emerald references → teal (matching our palette)
  content = content.replace(/emerald-500/g, "teal-500");
  content = content.replace(/emerald-600/g, "teal-600");
  content = content.replace(/emerald-400/g, "teal-400");

  if (content !== original) {
    fs.writeFileSync(file, content, "utf8");
    modifiedCount++;
    console.log("Cleaned:", file);
  }
});

console.log(`\nDone! Cleaned ${modifiedCount} files of legacy orange/emerald references.`);
