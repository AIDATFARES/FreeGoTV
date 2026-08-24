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
  // text-red-300 → text-sky-400
  [/text-red-300/g, "text-sky-400"],
  // text-red-200 → text-sky-300
  [/text-red-200/g, "text-sky-300"],
  // text-red-100 → text-sky-200
  [/text-red-100/g, "text-sky-200"],
  
  // bg-red-100 → bg-sky-100
  [/bg-red-100/g, "bg-sky-100"],
  // bg-red-950 → bg-slate-950
  [/red-950/g, "slate-900"],
  
  // hover:text-red-300 → hover:text-teal-400
  [/hover:text-red-300/g, "hover:text-teal-400"],
  
  // hover:border-red-300 → hover:border-sky-300
  [/hover:border-red-300/g, "hover:border-sky-300"],
  // border-red-300 → border-sky-300
  [/border-red-300/g, "border-sky-300"],
  
  // from-red-50/60 → from-sky-50/60
  [/from-red-50\/60/g, "from-sky-50/60"],

  // stone-800 → slate-800
  [/stone-800/g, "slate-800"],
];

files.forEach(file => {
  let content = fs.readFileSync(file, "utf8");
  const original = content;

  replacements.forEach(([find, replace]) => {
    content = content.replace(find, replace);
  });

  if (content !== original) {
    fs.writeFileSync(file, content, "utf8");
    modifiedCount++;
    console.log("Fixed:", file);
  }
});

console.log(`\nDone! Fixed ${modifiedCount} files.`);
