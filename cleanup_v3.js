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

const replacements = [
  // Legacy red/orange hover and accent colors
  ["hover:text-[#f44336]", "hover:text-[#0D9488]"],
  
  // Red backgrounds → sky/teal tint
  [/bg-red-50\/60/g, "bg-sky-50/60"],
  [/bg-red-50\/50/g, "bg-sky-50/50"],
  [/bg-red-50\/30/g, "bg-sky-50/30"],
  [/bg-red-50/g, "bg-sky-50"],
  [/hover:bg-red-50/g, "hover:bg-sky-50"],
  
  // Red borders → sky borders
  [/border-red-200/g, "border-sky-200"],
  [/border-red-600/g, "border-sky-600"],
  
  // Red shadows → sky/teal shadows
  [/shadow-red-600\/30/g, "shadow-sky-500/25"],
  [/shadow-red-500\/20/g, "shadow-sky-500/20"],
  
  // Red text → teal text
  [/text-red-50/g, "text-white"],
  
  // Stone-800 buttons (dark on dark contrast issue) → slate-700 with white text
  ["bg-stone-800 hover:bg-[#0F172A]", "bg-[#0F172A] hover:bg-[#14B8A6] text-white"],
];

files.forEach(file => {
  let content = fs.readFileSync(file, "utf8");
  const original = content;

  replacements.forEach(([find, replace]) => {
    if (find instanceof RegExp) {
      content = content.replace(find, replace);
    } else {
      content = content.split(find).join(replace);
    }
  });

  if (content !== original) {
    fs.writeFileSync(file, content, "utf8");
    modifiedCount++;
    console.log("Fixed:", file);
  }
});

console.log(`\nDone! Fixed ${modifiedCount} files.`);
