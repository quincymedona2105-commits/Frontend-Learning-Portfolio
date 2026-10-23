const fs = require('fs');
const path = require('path');

const baseDir = 'C:\\Frontend';

function getStickyBar(techName, upLevels = '..') {
  return `<!-- QUINCY.DEV PORTFOLIO TASK NAVIGATION BAR -->
<div id="portfolio-task-nav-bar" style="position: sticky; top: 0; left: 0; right: 0; z-index: 99999; background: rgba(3, 20, 18, 0.95); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border-bottom: 1px solid rgba(56, 239, 125, 0.35); padding: 12px 24px; display: flex; align-items: center; justify-content: space-between; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
  <a href="${upLevels}/index.html" style="display: inline-flex; align-items: center; gap: 8px; color: #38ef7d; text-decoration: none; font-size: 14px; font-weight: 700; background: rgba(56, 239, 125, 0.12); border: 1px solid rgba(56, 239, 125, 0.4); padding: 8px 18px; border-radius: 9999px; transition: all 0.2s ease;">
    &#8592; Back to ${techName} Tasks
  </a>
  <span style="font-size: 13px; color: #a3c7b9; font-weight: 600; letter-spacing: 0.5px;">
    QUINCY.DEV &middot; ${techName} Practice
  </span>
</div>
`;
}

function processDir(dirPath, techName, levelFromTech = 1) {
  const upLevels = levelFromTech === 1 ? '..' : '../..';
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === 'assets') continue;
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath, techName, levelFromTech + 1);
    } else if (entry.name.endsWith('.html')) {
      try {
        let content = fs.readFileSync(fullPath, 'utf8');
        if (!content.includes('portfolio-task-nav-bar')) {
          if (content.includes('<body')) {
            content = content.replace(/(<body[^>]*>)/i, `$1\n${getStickyBar(techName, upLevels)}`);
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log(`Injected nav into: ${fullPath}`);
          }
        }
      } catch (err) {
        console.error(`Error in ${fullPath}:`, err.message);
      }
    }
  }
}

// Process CSS, BS, JS (only subfolders, not tech/index.html!)
['CSS', 'BS', 'JS'].forEach(tech => {
  const techDir = path.join(baseDir, tech);
  const subs = fs.readdirSync(techDir, { withFileTypes: true }).filter(s => s.isDirectory() && s.name !== 'assets');
  subs.forEach(s => {
    processDir(path.join(techDir, s.name), tech, 1);
  });
});

console.log('All technology tasks now have the Back to Tasks navigation bar!');
