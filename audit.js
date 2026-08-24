const fs = require('fs');
const path = require('path');

function walkSync(dir, filelist = []) {
  if (!fs.existsSync(dir)) return filelist;
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== '.next') {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
}

const files = walkSync('src');
let output = '';

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Simple regex to find <h1... >Text</h1>
  const regex = /<(h[1-6])(.*?)>(.*?)<\/\1>/gi;
  let match;
  let fileHasHeadings = false;
  
  while ((match = regex.exec(content)) !== null) {
    if (!fileHasHeadings) {
      output += `\n--- ${file} ---\n`;
      fileHasHeadings = true;
    }
    const tag = match[1];
    let inner = match[3].replace(/<[^>]*>?/gm, '').trim();
    if (inner === '') inner = match[3].trim(); // If it's a dynamic variable {title}
    output += `${tag.toUpperCase()}: ${inner}\n`;
  }
});

fs.writeFileSync('audit_report.txt', output);
console.log('Audit completed. Check audit_report.txt');
