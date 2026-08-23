const fs = require("fs");
const path = require("path");

function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      if (file !== "node_modules" && file !== ".git" && file !== ".next" && file !== "public") {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      if (
        dirFile.endsWith(".ts") || 
        dirFile.endsWith(".tsx") || 
        dirFile.endsWith(".json") || 
        dirFile.endsWith(".md")
      ) {
        if (!dirFile.includes("package-lock.json") && !dirFile.includes("lh-report")) {
          filelist.push(dirFile);
        }
      }
    }
  });
  return filelist;
}

const files = walkSync(".");
let modifiedCount = 0;

const replacements = [
  { regex: /freegotv-iptv/g, replace: "4k-iptv-usa" },
  { regex: /FreeGoTV/g, replace: "4K IPTV USA" },
  { regex: /FREEGOTV/g, replace: "4K IPTV USA" },
  { regex: /freegotv/g, replace: "4kiptvusa" },
];

files.forEach(file => {
  const original = fs.readFileSync(file, "utf8");
  let updated = original;

  replacements.forEach(({ regex, replace }) => {
    updated = updated.replace(regex, replace);
  });

  if (original !== updated) {
    fs.writeFileSync(file, updated, "utf8");
    modifiedCount++;
    console.log("Modified:", file);
  }
});

console.log(`Modified ${modifiedCount} files for 4K IPTV USA branding.`);
