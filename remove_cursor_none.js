const fs = require('fs');
const path = require('path');

const dir = './components';
const appDir = './app';

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  // Remove cursor-none tailwind class
  content = content.replace(/\bcursor-none\b/g, '');
  // clean up any double spaces left behind
  content = content.replace(/  +/g, ' ');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', filePath);
  }
}

function walkDir(currentDir) {
  const files = fs.readdirSync(currentDir);
  for (const file of files) {
    const fullPath = path.join(currentDir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      replaceInFile(fullPath);
    }
  }
}

walkDir(dir);
walkDir(appDir);
console.log('Done removing cursor-none.');
