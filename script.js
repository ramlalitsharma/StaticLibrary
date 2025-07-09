// Project Data (10 Functional Projects with Tutorials)
const projects = [
  {
    id: 'project-1',
    title: 'Expanding Cards',
    keywords: ['expanding', 'cards', 'animation', 'css', 'js', 'gallery'],
    description: 'Create an interactive gallery where cards expand on click with smooth CSS animations. Perfect for portfolios, product showcases, or galleries, this project teaches flexbox, transitions, and JavaScript event handling. Customize card content, colors, or animations to match your site’s theme.',
    tutorial: 'Use a flex container with cards set to `flex: 1`. On click, toggle a class like `flex-[3]` to expand the selected card while shrinking others. Use Tailwind CSS or custom styles for design. Add transitions for smooth animations. Test responsiveness for mobile compatibility.'
  },
  {
    id: 'project-2',
    title: 'Progress Steps',
    keywords: ['progress', 'steps', 'wizard', 'form', 'js', 'ecommerce'],
    description: 'Build a multi-step progress bar for forms or checkout processes, ideal for e-commerce or sign-up flows. It uses CSS for styling and JavaScript for dynamic updates, teaching DOM manipulation and state management.',
    tutorial: 'Create steps with HTML divs and style with CSS. Use JavaScript to toggle active classes and update progress bar width based on the current step. Customize colors, add animations, or adjust step count to fit your needs.'
  },
  // Add remaining 8 projects with descriptions and tutorials
];

// Render Navigation
function renderNavigation() {
  const nav = document.getElementById('project-nav');
  if (!nav) return;
  nav.innerHTML = projects.map(p => `
    <a href="#${p.id}" class="nav-link" role="listitem" aria-label="Navigate to ${p.title}">${p.title}</a>
  `).join('');
}

// Render Projects
function renderProjects(filter = '') {
  const container = document.getElementById('projects-container');
  if (!container) {
    console.error('Projects container not found');
    return;
  }
  const filteredProjects = filter
    ? projects.filter(p => p.title.toLowerCase().includes(filter.toLowerCase()) || p.keywords.some(k => k.toLowerCase().includes(filter.toLowerCase())))
    : projects;
  if (filteredProjects.length === 0) {
    container.innerHTML = '<p class="text-center text-gray-500 dark:text-gray-400">No projects found. Try a different search term.</p>';
    return;
  }
  container.innerHTML = filteredProjects.map(project => {
    const uniqueId = `${project.id}-${Math.random().toString(36).substr(2, 9)}`;
    let demoHTML = '';
    let codeSnippet = '';
    switch (project.id) {
      case 'project-1':
        demoHTML = `<div id="expanding-cards-${uniqueId}" class="flex gap-2 max-w-xl mx-auto" loading="lazy">
          <div class="card flex-1 bg-purple-500 text-white rounded-lg p-4 cursor-pointer transition-all duration-500">
            <h3 class="font-bold">Card 1</h3><p>Click to expand</p>
          </div>
          <div class="card flex-1 bg-blue-600 text-white rounded-lg p-4 cursor-pointer transition-all duration-500">
            <h3 class="font-bold">Card 2</h3><p>Click to expand</p>
          </div>
        </div>`;
        codeSnippet = `
const container = document.getElementById('expanding-cards-${uniqueId}');
const cards = container.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('flex-[3]'));
    card.classList.add('flex-[3]');
  });
});
        `;
        break;
      case 'project-2':
        demoHTML = `<div id="progress-steps-${uniqueId}" class="max-w-sm mx-auto text-center" loading="lazy">
          <div class="flex justify-between mb-4">
            <div class="step w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">1</div>
            <div class="step w-8 h-8 rounded-full bg-gray-300 text-gray-800 flex items-center justify-center">2</div>
            <div class="step w-8 h-8 rounded-full bg-gray-300 text-gray-800 flex items-center justify-center">3</div>
          </div>
          <div class="h-2 bg-gray-300 rounded"><div id="progress-fill-${uniqueId}" class="h-full bg-blue-600 w-1/3 rounded transition-all"></div></div>
          <div class="mt-4 flex justify-between">
            <button id="prev-step-${uniqueId}" class="px-4 py-2 bg-gray-400 text-white rounded disabled:opacity-50" disabled>Prev</button>
            <button id="next-step-${uniqueId}" class="px-4 py-2 bg-blue-600 text-white rounded">Next</button>
          </div>
        </div>`;
        codeSnippet = `
const prev = document.getElementById('prev-step-${uniqueId}');
const next = document.getElementById('next-step-${uniqueId}');
const steps = document.querySelectorAll('#progress-steps-${uniqueId} .step');
const fill = document.getElementById('progress-fill-${uniqueId}');
let current = 1;
next.addEventListener('click', () => {
  current++;
  if (current > steps.length) current = steps.length;
  updateSteps();
});
prev.addEventListener('click', () => {
  current--;
  if (current < 1) current = 1;
  updateSteps();
});
function updateSteps() {
  steps.forEach((step, i) => {
    step.classList.toggle('bg-blue-600', i < current);
    step.classList.toggle('bg-gray-300', i >= current);
    step.classList.toggle('text-white', i < current);
    step.classList.toggle('text-gray-800', i >= current);
  });
  fill.style.width = \`\${((current - 1) / (steps.length - 1)) * 100}%\`;
  prev.disabled = current === 1;
  next.disabled = current === steps.length;
}
        `;
        break;
      // Add cases for remaining projects
    }
    return `
      <div id="${project.id}" class="project bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-bold mb-4">${project.title}</h2>
        <p class="text-gray-700 dark:text-gray-300 mb-4">${project.description}</p>
        <p class="text-gray-700 dark:text-gray-300 mb-4"><strong>Tutorial:</strong> ${project.tutorial}</p>
        <div class="demo mb-4 p-4 bg-gray-100 dark:bg-gray-700 rounded">${demoHTML}</div>
        <div class="code relative">
          <pre class="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto"><code>${codeSnippet.trim()}</code></pre>
          <button class="copy-btn absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded" aria-label="Copy code">Copy</button>
        </div>
      </div>
    `;
  }).join('');
  // Execute demo scripts
  filteredProjects.forEach(project => {
    const script = document.createElement('script');
    script.textContent = document.querySelector(`#${project.id} .code code`).textContent;
    document.body.appendChild(script);
  });
}

// Search Functionality
function setupSearch() {
  const searchInput = document.getElementById('search-input');
  const suggestions = document.getElementById('search-suggestions');
  if (!searchInput || !suggestions) return;
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    suggestions.innerHTML = '';
    if (query.length < 2) {
      suggestions.classList.add('hidden');
      renderProjects();
      return;
    }
    const matches = projects.filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.keywords.some(k => k.toLowerCase().includes(query.toLowerCase())));
    suggestions.innerHTML = matches.map(p => `<div class="p-2 cursor-pointer" data-id="${p.id}">${p.title}</div>`).join('');
    suggestions.classList.toggle('hidden', matches.length === 0);
    renderProjects(query);
  });
  suggestions.addEventListener('click', e => {
    const id = e.target.dataset.id;
    if (id) {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
      searchInput.value = '';
      suggestions.classList.add('hidden');
      renderProjects();
    }
  });
}

// Copy Code Functionality
function setupCopyButtons() {
  document.addEventListener('click', e => {
    if (e.target.classList.contains('copy-btn')) {
      const code = e.target.parentElement.querySelector('code').textContent;
      navigator.clipboard.write(code).then(() => {
        e.target.textContent = 'Copied!';
        setTimeout(() => e.target.textContent = 'Copy', 2000);
      });
    }
  });
}

// Dark/Light Mode Toggle
const themeToggleBtn = document.createElement('button');
themeToggleBtn.className = 'btn btn-secondary position-fixed top-0 end-0 m-3';
themeToggleBtn.innerHTML = '<span id="theme-icon" class="bi bi-moon"></span>';
themeToggleBtn.title = 'Toggle dark/light mode';
document.body.appendChild(themeToggleBtn);

function setTheme(mode) {
  if (mode === 'dark') {
    document.body.classList.add('bg-dark', 'text-white');
    document.body.classList.remove('bg-light', 'text-dark');
    document.getElementById('theme-icon').className = 'bi bi-sun';
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('bg-dark', 'text-white');
    document.body.classList.add('bg-light', 'text-dark');
    document.getElementById('theme-icon').className = 'bi bi-moon';
    localStorage.setItem('theme', 'light');
  }
}

// Initial theme
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

themeToggleBtn.onclick = function() {
  const current = localStorage.getItem('theme') || 'light';
  setTheme(current === 'light' ? 'dark' : 'light');
};

// Back to Top Button
const backToTopBtn = document.createElement('button');
backToTopBtn.className = 'btn btn-primary position-fixed bottom-0 end-0 m-4 d-none';
backToTopBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
backToTopBtn.title = 'Back to top';
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.remove('d-none');
  } else {
    backToTopBtn.classList.add('d-none');
  }
});
backToTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// QR Code Generator
if (document.getElementById('qrForm')) {
  document.getElementById('qrForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.getElementById('qrInput').value;
    const qrResult = document.getElementById('qrResult');
    if (input.trim() === '') {
      qrResult.innerHTML = '';
      return;
    }
    // Use Google Chart API for QR code
    qrResult.innerHTML = `<img src='https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${encodeURIComponent(input)}' alt='QR Code' class='img-fluid'/>`;
  });
}

// Password Generator
if (document.getElementById('passwordForm')) {
  document.getElementById('passwordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const length = parseInt(document.getElementById('passwordLength').value) || 12;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let password = '';
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('passwordResult').value = password;
  });
}

// To-Do List
if (document.getElementById('todoForm')) {
  const todoForm = document.getElementById('todoForm');
  const todoInput = document.getElementById('todoInput');
  const todoList = document.getElementById('todoList');
  todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const task = todoInput.value.trim();
    if (task === '') return;
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.textContent = task;
    const btn = document.createElement('button');
    btn.className = 'btn btn-sm btn-danger';
    btn.textContent = 'Delete';
    btn.onclick = function() { li.remove(); };
    li.appendChild(btn);
    todoList.appendChild(li);
    todoInput.value = '';
  });
}

// Calculator
if (document.getElementById('calcForm')) {
  document.getElementById('calcForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const a = parseFloat(document.getElementById('calcA').value);
    const b = parseFloat(document.getElementById('calcB').value);
    const op = document.getElementById('calcOp').value;
    let result = '';
    if (isNaN(a) || isNaN(b)) {
      result = 'Invalid input';
    } else {
      switch (op) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': result = b !== 0 ? a / b : '∞'; break;
      }
    }
    document.getElementById('calcResult').value = result;
  });
}

// Unit Converter
if (document.getElementById('unitForm')) {
  document.getElementById('unitForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const value = parseFloat(document.getElementById('unitInput').value);
    const type = document.getElementById('unitType').value;
    let result = '';
    if (isNaN(value)) {
      result = 'Invalid input';
    } else {
      switch (type) {
        case 'km-mi': result = (value * 0.621371).toFixed(4) + ' mi'; break;
        case 'mi-km': result = (value / 0.621371).toFixed(4) + ' km'; break;
        case 'kg-lb': result = (value * 2.20462).toFixed(4) + ' lb'; break;
        case 'lb-kg': result = (value / 2.20462).toFixed(4) + ' kg'; break;
      }
    }
    document.getElementById('unitResult').value = result;
  });
}

// Cookie Consent Banner
function showCookieConsent() {
  if (!localStorage.getItem('cookieConsent')) {
    const banner = document.createElement('div');
    banner.id = 'cookieConsent';
    banner.innerHTML = `
      <span>This website uses cookies to ensure you get the best experience. <a href='terms.html' class='text-info text-decoration-underline'>Learn more</a>.</span>
      <button id='acceptCookies'>Accept</button>
    `;
    document.body.appendChild(banner);
    document.getElementById('acceptCookies').onclick = function() {
      localStorage.setItem('cookieConsent', 'true');
      banner.classList.add('hide');
    };
  }
}
showCookieConsent();

// Enable lazy loading for all images
window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('img').forEach(img => {
    img.setAttribute('loading', 'lazy');
  });
});

// Performance & Security Recommendations:
// - Use a CDN (e.g., Cloudflare, Netlify) for static assets.
// - Always serve your site over HTTPS for security and SEO.
// - Minify CSS/JS (use online tools or build tools for production).
// - Optimize images before uploading (TinyPNG, Squoosh, etc).
// - Use rel='noopener noreferrer' for external links.

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderNavigation();
  renderProjects();
  setupSearch();
  setupCopyButtons();
  // setupThemeToggle(); // This line is removed as per the new_code, as the theme toggle is now handled by setTheme
  // setupBackToTop(); // This line is removed as per the new_code, as the back-to-top is now handled by the new_code
});
