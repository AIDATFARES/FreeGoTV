const fs = require('fs');
const lines = fs.readFileSync('src/data/blog.ts', 'utf8').split('\n');
lines.forEach((line, i) => {
  if (line.includes('title:') || line.includes('description:')) {
    console.log(i + 1, line);
  }
});
