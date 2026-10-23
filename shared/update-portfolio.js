/**
 * QUINCY.DEV - Frontend Learning Portfolio Maintenance Script
 * 
 * Usage:
 *   node shared/update-portfolio.js
 * 
 * This script:
 * 1. Scans all technology folders (HTML, CSS, BS, JS, React).
 * 2. Identifies all day folders and sorts them in natural numerical order (Day 2 before Day 10).
 * 3. Scans all HTML task files within each day.
 * 4. Extracts metadata (titles, headings) to populate task labels.
 * 5. Generates or updates shared/portfolio-data.js.
 * 6. Regenerates HTML/index.html, CSS/index.html, BS/index.html, JS/index.html, React/index.html.
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

const TECH_DEFINITIONS = {
  HTML: {
    id: "HTML",
    name: "HTML",
    fullName: "HTML5 & Semantic Markup",
    folderName: "HTML",
    iconClass: "fa-brands fa-html5",
    accentColor: "#e34f26",
    tagline: "Webpage structure, forms, tables, semantic tags, and document architecture."
  },
  CSS: {
    id: "CSS",
    name: "CSS",
    fullName: "CSS3 & Responsive Design",
    folderName: "CSS",
    iconClass: "fa-brands fa-css3-alt",
    accentColor: "#264de4",
    tagline: "Styling, Flexbox, Grid, animations, responsive design, and modern UI layouts."
  },
  BS: {
    id: "BS",
    name: "Bootstrap",
    fullName: "Bootstrap 5 & UI Frameworks",
    folderName: "BS",
    iconClass: "fa-brands fa-bootstrap",
    accentColor: "#7952b3",
    tagline: "Responsive grid systems, reusable UI components, and utility classes."
  },
  JS: {
    id: "JS",
    name: "JavaScript",
    fullName: "JavaScript & DOM Scripting",
    folderName: "JS",
    iconClass: "fa-brands fa-js",
    accentColor: "#f7df1e",
    tagline: "DOM manipulation, event handling, logic, functions, and web applications."
  },
  React: {
    id: "React",
    name: "React",
    fullName: "React & Modern UI Architecture",
    folderName: "React",
    iconClass: "fa-brands fa-react",
    accentColor: "#61dafb",
    tagline: "Components, props, state, hooks, and interactive user interfaces."
  }
};

// Helper: Extract HTML title & h1
function getFileMetadata(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const titleMatch = content.match(/<title>([^<]*)<\/title>/i);
    const h1Match = content.match(/<h[1-2][^>]*>([^<]*)<\/h[1-2]>/i);
    return {
      title: titleMatch ? titleMatch[1].trim() : '',
      heading: h1Match ? h1Match[1].trim().replace(/\s+/g, ' ') : ''
    };
  } catch (e) {
    return { title: '', heading: '' };
  }
}

// Helper: Recursively find HTML files inside a directory (excluding node_modules / .git)
function findHtmlFiles(dirPath, relativePrefix = '') {
  let results = [];
  const items = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const item of items) {
    if (item.name === 'node_modules' || item.name === '.git') continue;
    const itemPath = path.join(dirPath, item.name);
    const rel = relativePrefix ? `${relativePrefix}/${item.name}` : item.name;
    if (item.isDirectory()) {
      results = results.concat(findHtmlFiles(itemPath, rel));
    } else if (item.name.endsWith('.html') || item.name.endsWith('.htm')) {
      const meta = getFileMetadata(itemPath);
      results.push({
        name: rel,
        label: meta.heading || meta.title || item.name,
        metaTitle: meta.title
      });
    }
  }
  return results;
}

// Natural numerical sort: "Day_2" before "Day_10", "Day2" before "Day10"
function naturalSortDays(a, b) {
  const numA = parseInt((a.name.match(/\d+/) || [0])[0], 10);
  const numB = parseInt((b.name.match(/\d+/) || [0])[0], 10);
  if (numA !== numB) return numA - numB;
  return a.name.localeCompare(b.name);
}

// Load existing portfolio-data.js if present to preserve custom descriptions
let existingData = {};
const dataFilePath = path.join(__dirname, 'portfolio-data.js');
if (fs.existsSync(dataFilePath)) {
  try {
    existingData = require('./portfolio-data.js');
  } catch (err) {
    console.log('Notice: Could not load existing data, building fresh.');
  }
}

const updatedPortfolio = {};

// Scan and build
Object.keys(TECH_DEFINITIONS).forEach(techKey => {
  const techMeta = TECH_DEFINITIONS[techKey];
  const techDir = path.join(rootDir, techKey);

  updatedPortfolio[techKey] = {
    ...techMeta,
    days: []
  };

  if (!fs.existsSync(techDir)) {
    console.warn(`Warning: Directory not found: ${techDir}`);
    return;
  }

  // Find subdirectories (excluding assets, node_modules)
  const dirItems = fs.readdirSync(techDir, { withFileTypes: true })
    .filter(item => item.isDirectory() && item.name !== 'assets' && item.name !== 'node_modules')
    .sort(naturalSortDays);

  dirItems.forEach(dirItem => {
    const folderName = dirItem.name;
    const subDirPath = path.join(techDir, folderName);
    const htmlFiles = findHtmlFiles(subDirPath);

    // Extract day number or use folder name
    const matchNum = folderName.match(/\d+/);
    const dayValue = matchNum ? parseInt(matchNum[0], 10) : folderName;

    // Determine primary entry file
    let entryFile = '';
    const fileNames = htmlFiles.map(f => f.name);

    if (fileNames.includes('index.html')) entryFile = 'index.html';
    else if (fileNames.includes('inedx.html')) entryFile = 'inedx.html';
    else if (fileNames.includes('task.html')) entryFile = 'task.html';
    else if (fileNames.includes('task_1.html')) entryFile = 'task_1.html';
    else if (fileNames.includes('Website/index.html')) entryFile = 'Website/index.html';
    else if (fileNames.length > 0) entryFile = fileNames[0];

    // Check if existing data already had a rich title and description
    let customTitle = '';
    let customDesc = '';
    if (existingData[techKey] && existingData[techKey].days) {
      const existingDay = existingData[techKey].days.find(d => d.folder === folderName);
      if (existingDay) {
        customTitle = existingDay.title;
        customDesc = existingDay.description;
        if (existingDay.entryFile && fileNames.includes(existingDay.entryFile)) {
          entryFile = existingDay.entryFile;
        }
      }
    }

    const title = customTitle || (htmlFiles[0] ? htmlFiles[0].label : `Day ${dayValue} Practice`);
    const description = customDesc || `Practical exercises and components built during ${folderName} study.`;

    updatedPortfolio[techKey].days.push({
      day: dayValue,
      folder: folderName,
      title,
      description,
      entryFile,
      files: htmlFiles.map(f => ({ name: f.name, label: f.label }))
    });
  });
});

// Save updated portfolio-data.js
const fileHeader = `/**
 * QUINCY.DEV - Frontend Learning Portfolio Data Configuration
 * Auto-generated & maintained by shared/update-portfolio.js
 */

const PORTFOLIO_DATA = ${JSON.stringify(updatedPortfolio, null, 2)};

if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
} else if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
`;

fs.writeFileSync(dataFilePath, fileHeader, 'utf8');
console.log(`[OK] Updated ${dataFilePath}`);

// Run index page generator
require('./generate-index-pages.js');
// Also run inject nav bar so any new tasks automatically receive the back navigation bar
require('./inject-nav-bar.js');
console.log('[OK] Portfolio updated, index pages generated, and back navigation bars ensured!');
