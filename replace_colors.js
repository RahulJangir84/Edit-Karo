const fs = require('fs');
const path = require('path');

const dir = './components';
const appDir = './app';

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  // Replace old accents with slate
  content = content.replace(/accent-cyan/g, 'slate-light');
  content = content.replace(/accent-blue/g, 'slate-medium');
  content = content.replace(/accent-purple/g, 'slate-dark');
  content = content.replace(/accent-amber/g, 'slate-light');
  content = content.replace(/accent-crimson/g, 'slate-medium');
  
  // Replace specific old colors
  content = content.replace(/rgba\(0,229,255/g, 'rgba(164,181,190'); // old cyan to slate-light
  content = content.replace(/rgba\(0,255,194/g, 'rgba(164,181,190'); // old cyan/teal to slate-light
  content = content.replace(/rgba\(249,168,38/g, 'rgba(164,181,190'); // old amber
  content = content.replace(/rgba\(201,42,42/g, 'rgba(125,145,154'); // old crimson
  
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
console.log('Done replacing colors.');
