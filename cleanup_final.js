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

  // hover:text-red-700 → hover:text-teal-600
  content = content.replace(/hover:text-red-700/g, "hover:text-teal-600");

  // border-red-200 → border-sky-200
  content = content.replace(/hover:border-red-200/g, "hover:border-sky-200");

  // #FF6B00 → #0EA5E9 (sky blue)
  content = content.replace(/#FF6B00/gi, "#0EA5E9");

  if (content !== original) {
    fs.writeFileSync(file, content, "utf8");
    modifiedCount++;
    console.log("Fixed:", file);
  }
});

console.log(`\nDone! Fixed ${modifiedCount} files.`);
