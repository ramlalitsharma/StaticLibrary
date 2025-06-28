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

// Theme Toggle
function setupThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });
  if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark');
  }
}

// Back to Top
function setupBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('hidden', window.scrollY < 200);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderNavigation();
  renderProjects();
  setupSearch();
  setupCopyButtons();
  setupThemeToggle();
  setupBackToTop();
});
