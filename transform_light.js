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
      if (dirFile.endsWith(".ts") || dirFile.endsWith(".tsx")) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
}

const files = walkSync("src");
let modifiedCount = 0;

const replacements = [
  // Backgrounds
  { regex: /(bg-\[)#0c0f0f(\])/g, replace: "$1#F1F1F5$2" },
  { regex: /(bg-\[)#121414(\])/g, replace: "$1#E8E9ED$2" },
  { regex: /(bg-\[)#1a1c1c(\])/g, replace: "$1#FFFFFF$2" },
  { regex: /\bbg-black\b/g, replace: "bg-[#2F3136]" },
  
  // Accents (previously red, originally orange/indigo/etc)
  { regex: /\bbg-red-[456]00\b/g, replace: "bg-[#7D927D]" },
  { regex: /\btext-red-[456]00\b/g, replace: "text-[#7D927D]" },
  { regex: /\bborder-red-[456]00\b/g, replace: "border-[#7D927D]" },
  
  { regex: /\bfrom-red-[456]00\b/g, replace: "from-[#5B7083]" },
  { regex: /\bvia-red-[456]00\b/g, replace: "via-[#6C8180]" }, // Middle of gradient roughly
  { regex: /\bto-red-[456]00\b/g, replace: "to-[#7D927D]" },

  // Text colors
  { regex: /\btext-stone-[3456]00\b/g, replace: "text-[#68717A]" },
  { regex: /\btext-white\b/g, replace: "text-[#2F3136]" }, // Was on dark bg, now on light
  { regex: /\btext-black\b/g, replace: "text-[#2F3136]" },
  
  // Borders
  { regex: /\bborder-white\/10\b/g, replace: "border-[#2F3136]/10" },
  { regex: /\bborder-white\/20\b/g, replace: "border-[#2F3136]/10" },
  { regex: /\bborder-stone-800\b/g, replace: "border-[#2F3136]/10" },
  
  // Cards and specific UI elements
  // Assuming card hover effects used white/5 or similar
  { regex: /\bbg-white\/5\b/g, replace: "bg-[#FFFFFF]" },
  { regex: /\bhover:bg-white\/10\b/g, replace: "hover:bg-[#F7F7F8]" },
  { regex: /\bbg-white\/10\b/g, replace: "bg-[#FFFFFF]" },
  
  // Gradient replacements
  { regex: /\bbg-gradient-to-r\b/g, replace: "bg-gradient-to-r" }, // Keep
  
  // Hardcoded rgb values if any
  { regex: /rgba\(255,255,255,0\.04\)/g, replace: "rgba(47,49,54,0.08)" },
];

files.forEach(file => {
  const original = fs.readFileSync(file, "utf8");
  let updated = original;

  replacements.forEach(({ regex, replace }) => {
    updated = updated.replace(regex, replace);
  });
  
  // Fixes for buttons / sections that SHOULD keep white text (like gradients or dark sections)
  // If an element has bg-[#7D927D] or from-[#5B7083], it probably needs text-white
  // A quick hack is to let text-[#2F3136] be default, and manually restore text-white on gradients via CSS or finding them.
  // We'll replace text-[#2F3136] with text-white if it's on a brand-gradient button.
  updated = updated.replace(/from-\[#5B7083\]([^"']*)text-\[#2F3136\]/g, "from-[#5B7083]$1text-white");
  updated = updated.replace(/bg-\[#2F3136\]([^"']*)text-\[#2F3136\]/g, "bg-[#2F3136]$1text-white");

  if (original !== updated) {
    fs.writeFileSync(file, updated, "utf8");
    modifiedCount++;
  }
});

console.log(`Modified ${modifiedCount} files for light theme.`);
