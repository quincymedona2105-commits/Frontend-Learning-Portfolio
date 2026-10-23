const fs = require('fs');
const path = require('path');
const portfolioData = require('./portfolio-data.js');

const baseDir = path.resolve(__dirname, '..');

function buildTechIndexHtml(techKey) {
  const tech = portfolioData[techKey];
  if (!tech) throw new Error(`Unknown tech: ${techKey}`);

  const daysCount = tech.days.length;

  const dayCardsHtml = tech.days.map(d => {
    // Clean minimalist title as requested: "Day_1" (folder name)
    const cardTitle = d.folder;
    
    // Relative link to primary task file from this tech folder
    const primaryLink = `${d.folder}/${d.entryFile}`;

    // Multiple task pills if more than 1 file
    let multiTaskHtml = '';
    if (d.files && d.files.length > 1) {
      const pills = d.files.map(f => {
        const fileLink = `${d.folder}/${f.name}`;
        // Clean short label (e.g. task_1.html -> task_1)
        const cleanLabel = f.name.replace(/\.html$/i, '');
        return `<a href="${fileLink}" class="task-pill-link" title="Open ${f.name}"><i class="fa-regular fa-file-code"></i> ${cleanLabel}</a>`;
      }).join('\n            ');

      multiTaskHtml = `
          <div class="day-tasks-section" style="margin-top: 14px; margin-bottom: 14px; padding-top: 10px;">
            <div class="task-pills-list">
              ${pills}
            </div>
          </div>`;
    }

    return `
        <!-- ${cardTitle} Card -->
        <article class="day-card" data-title="${cardTitle.toLowerCase()}" data-folder="${d.folder.toLowerCase()}">
          <div class="day-card-header" style="margin-bottom: 8px;">
            <span class="day-pill"><i class="fa-regular fa-folder"></i> ${cardTitle}</span>
          </div>
          <h3 class="day-title" style="font-size: 20px; font-weight: 800; color: var(--text-primary); margin-bottom: 12px;">
            ${cardTitle}
          </h3>
          ${multiTaskHtml}
          <div style="margin-top: auto; padding-top: 8px;">
            <a href="${primaryLink}" class="open-task-btn" target="_self">
              <span>Open Task</span>
              <i class="fa-solid fa-arrow-up-right-from-square btn-arrow"></i>
            </a>
          </div>
        </article>`;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${tech.name} Practice · QUINCY.DEV Portfolio</title>
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <!-- Shared Portfolio Design System -->
  <link rel="stylesheet" href="../shared/portfolio.css">
</head>
<body>

  <!-- Navigation Bar -->
  <header class="container" style="padding-bottom: 0;">
    <nav class="header-nav">
      <a href="../index.html" class="nav-brand">
        <div class="logo-badge">Q</div>
        <div class="logo-text">QUINCY<span>.DEV</span></div>
      </a>
      <div class="nav-right">
        <a href="../index.html" class="nav-back-link">
          <i class="fa-solid fa-arrow-left"></i>
          <span>Back to Home</span>
        </a>
      </div>
    </nav>
  </header>

  <!-- Main Content -->
  <main class="container">
    <!-- Breadcrumbs -->
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="../index.html"><i class="fa-solid fa-house"></i> Home</a>
      <span class="separator">/</span>
      <span class="current">${tech.name}</span>
    </nav>

    <!-- Tech Banner -->
    <section class="hero-section" style="margin-bottom: 32px;">
      <div class="hero-pill">
        <i class="${tech.iconClass}"></i> ${tech.name} Practice Track
      </div>
      <h1 class="hero-title">
        ${tech.name} <span class="gradient-text">Practice Portfolio</span>
      </h1>
      <p class="hero-desc">
        ${tech.tagline}
      </p>

      <!-- Quick Metrics -->
      <div class="stats-row">
        <div class="stat-pill">
          <i class="fa-solid fa-calendar-days" style="color: var(--mint-neon);"></i>
          <span><strong>${daysCount}</strong> Available Days</span>
        </div>
        <div class="stat-pill">
          <i class="fa-solid fa-folder-tree" style="color: var(--mint-neon);"></i>
          <span>Directory: <strong>${tech.folderName}/</strong></span>
        </div>
      </div>
    </section>

    <!-- Controls Bar: Filter / Search -->
    <div class="days-control-bar">
      <div class="days-count-badge">
        <i class="fa-solid fa-layer-group"></i>
        <span id="filtered-count">${daysCount}</span> of ${daysCount} Days Shown
      </div>
      <div class="search-input-wrapper">
        <i class="fa-solid fa-magnifying-glass search-icon"></i>
        <input 
          type="text" 
          id="day-search" 
          class="search-input" 
          placeholder="Filter days (e.g. Day_1, 2)..." 
          autocomplete="off"
        >
      </div>
    </div>

    <!-- Day Cards Grid -->
    <div class="days-grid" id="days-grid">
      ${dayCardsHtml}
    </div>

    <!-- Empty Filter State (Hidden by default) -->
    <div id="empty-state" class="empty-state" style="display: none;">
      <i class="fa-regular fa-folder-open" style="font-size: 38px; color: var(--text-muted); margin-bottom: 12px; display: block;"></i>
      <h3 style="font-size: 18px; color: var(--text-primary); margin-bottom: 6px;">No practice days found</h3>
      <p style="font-size: 14px; color: var(--text-muted);">Try searching with a different keyword or clear the search input.</p>
    </div>
  </main>

  <!-- Footer -->
  <footer class="footer">
    <p class="footer-text">
      <span>QUINCY.DEV</span> · FRONTEND PRACTICE PORTFOLIO
    </p>
  </footer>

  <!-- Search & Filter Script -->
  <script>
    const searchInput = document.getElementById('day-search');
    const dayCards = document.querySelectorAll('.day-card');
    const filteredCount = document.getElementById('filtered-count');
    const emptyState = document.getElementById('empty-state');

    if (searchInput) {
      searchInput.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        let visibleCount = 0;

        dayCards.forEach(card => {
          const title = card.getAttribute('data-title') || '';
          const folder = card.getAttribute('data-folder') || '';

          const matches = !query || 
            title.includes(query) || 
            folder.includes(query);

          if (matches) {
            card.style.display = 'flex';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        if (filteredCount) filteredCount.textContent = visibleCount;
        if (emptyState) emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
      });
    }
  </script>

  <!-- Shared Data Script -->
  <script src="../shared/portfolio-data.js"></script>
</body>
</html>
`;
}

// Generate index.html for each technology
['HTML', 'CSS', 'BS', 'JS', 'React'].forEach(techKey => {
  const targetPath = path.join(baseDir, techKey, 'index.html');
  const htmlContent = buildTechIndexHtml(techKey);
  fs.writeFileSync(targetPath, htmlContent, 'utf8');
  console.log(`Generated: ${targetPath}`);
});

console.log('All 5 technology index pages regenerated successfully with minimalist day cards!');
