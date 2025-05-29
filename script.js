// Project Data (10 Functional Projects)
const projects = [
  {
    id: 'project-1',
    title: 'Expanding Cards',
    keywords: ['expanding', 'cards', 'animation', 'css', 'js'],
    description: 'Interactive card gallery where cards expand on click with smooth animations. Perfect for portfolios or product showcases.'
  },
  {
    id: 'project-2',
    title: 'Progress Steps',
    keywords: ['progress', 'steps', 'wizard', 'form', 'js'],
    description: 'Multi-step progress bar for forms or checkout processes. Ideal for e-commerce with Tailwind CSS styling.'
  },
  {
    id: 'project-3',
    title: 'Rotating Navigation',
    keywords: ['rotating', 'navigation', 'menu', 'css', 'js'],
    description: 'Hamburger menu that rotates to reveal navigation links, enhancing mobile navigation.'
  },
  {
    id: 'project-4',
    title: 'Hidden Search Widget',
    keywords: ['search', 'widget', 'animation', 'css', 'js'],
    description: 'Togglable search input with smooth animation, saving space in headers.'
  },
  {
    id: 'project-5',
    title: 'Blurry Loading',
    keywords: ['blurry', 'loading', 'image', 'css', 'js'],
    description: 'Image loading with a blurry placeholder transitioning to clear, enhancing gallery UX.'
  },
  {
    id: 'project-6',
    title: 'Simple Counter',
    keywords: ['counter', 'javascript', 'button', 'increment', 'decrement'],
    description: 'A simple counter with increment and decrement buttons, styled with Tailwind CSS.'
  },
  {
    id: 'project-7',
    title: 'To-Do List',
    keywords: ['todo', 'list', 'task', 'javascript', 'localstorage'],
    description: 'A to-do list app to add, complete, and remove tasks with localStorage persistence.'
  },
  {
    id: 'project-8',
    title: 'Random Color Generator',
    keywords: ['color', 'generator', 'random', 'javascript', 'css'],
    description: 'Generate random colors and apply them to the background with a click, showing the hex code.'
  },
  {
    id: 'project-9',
    title: 'Digital Clock',
    keywords: ['clock', 'digital', 'time', 'javascript', 'css'],
    description: 'A digital clock displaying the current time, updating every second.'
  },
  {
    id: 'project-10',
    title: 'Tip Calculator',
    keywords: ['calculator', 'tip', 'bill', 'javascript', 'math'],
    description: 'Calculate tip amount and total bill per person based on bill, tip percentage, and people.'
  }
];

// Render Projects
function renderProjects(filter = '') {
  console.log('Rendering projects...');
  const container = document.getElementById('projects-container');
  if (!container) {
    console.error('Projects container not found');
    return;
  }
  container.innerHTML = '';

  projects.forEach((project, index) => {
    if (filter && !project.keywords.some(k => k.toLowerCase().includes(filter.toLowerCase())) && !project.title.toLowerCase().includes(filter.toLowerCase())) return;

    const uniqueId = `${project.id}-${Date.now()}`;
    const div = document.createElement('div');
    div.id = project.id;
    div.className = 'project bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6';

    let demoHTML = '';
    let codeSnippet = '';

    switch (project.id) {
      case 'project-1': // Expanding Cards
        demoHTML = `<div id="expanding-cards-${uniqueId}" class="flex gap-2 max-w-xl mx-auto">
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

      case 'project-2': // Progress Steps
        demoHTML = `<div id="progress-steps-${uniqueId}" class="max-w-sm mx-auto text-center">
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

      case 'project-3': // Rotating Navigation
        demoHTML = `<div id="rotating-nav-${uniqueId}" class="text-center">
          <button id="nav-toggle-${uniqueId}" class="p-2" aria-label="Toggle navigation">
            <span class="block w-6 h-1 bg-blue-600 mb-1"></span>
            <span class="block w-6 h-1 bg-blue-600 mb-1"></span>
            <span class="block w-6 h-1 bg-blue-600"></span>
          </button>
          <nav id="nav-menu-${uniqueId}" class="hidden mt-4">
            <a href="#" class="mx-2 text-blue-600">Home</a>
            <a href="#" class="mx-2 text-blue-600">About</a>
          </nav>
        </div>`;
        codeSnippet = `
const toggle = document.getElementById('nav-toggle-${uniqueId}');
const menu = document.getElementById('nav-menu-${uniqueId}');
toggle.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  const spans = toggle.querySelectorAll('span');
  spans.forEach((span, i) => {
    span.style.transform = menu.classList.contains('hidden') ? 'rotate(0)' : \`rotate(\${(i - 1) * 45}deg)\`;
  });
});
        `;
        break;

      case 'project-4': // Hidden Search Widget
        demoHTML = `<div id="hidden-search-${uniqueId}" class="text-center">
          <button id="toggle-search-${uniqueId}" class="px-4 py-2 bg-blue-600 text-white rounded">Search</button>
          <input id="search-box-${uniqueId}" type="search" placeholder="Search..." class="hidden mt-2 p-2 w-48 border rounded">
        </div>`;
        codeSnippet = `
const toggle = document.getElementById('toggle-search-${uniqueId}');
const search = document.getElementById('search-box-${uniqueId}');
toggle.addEventListener('click', () => {
  search.classList.toggle('hidden');
  if (!search.classList.contains('hidden')) search.focus();
});
        `;
        break;

      case 'project-5': // Blurry Loading
        demoHTML = `<div id="blurry-loading-${uniqueId}" class="max-w-sm mx-auto">
          <img id="blur-image-${uniqueId}" src="https://picsum.photos/400/200" loading="lazy" alt="Sample" class="w-full blur-md transition-all duration-500">
        </div>`;
        codeSnippet = `
const img = document.getElementById('blur-image-${uniqueId}');
img.addEventListener('load', () => {
  img.classList.remove('blur-md');
});
        `;
        break;

      case 'project-6': // Simple Counter
        demoHTML = `<div id="counter-${uniqueId}" class="text-center">
          <p id="counter-value-${uniqueId}" class="text-2xl font-bold mb-4">0</p>
          <button id="increment-${uniqueId}" class="px-4 py-2 bg-blue-600 text-white rounded mr-2">+1</button>
          <button id="decrement-${uniqueId}" class="px-4 py-2 bg-red-600 text-white rounded">-1</button>
        </div>`;
        codeSnippet = `
const value = document.getElementById('counter-value-${uniqueId}');
const increment = document.getElementById('increment-${uniqueId}');
const decrement = document.getElementById('decrement-${uniqueId}');
let count = 0;
increment.addEventListener('click', () => {
  count++;
  value.textContent = count;
});
decrement.addEventListener('click', () => {
  count--;
  value.textContent = count;
});
        `;
        break;

      case 'project-7': // To-Do List
        demoHTML = `<div id="todo-${uniqueId}" class="max-w-md mx-auto">
          <div class="flex mb-4">
            <input id="todo-input-${uniqueId}" type="text" placeholder="Add a task..." class="flex-1 p-2 border rounded-l">
            <button id="todo-add-${uniqueId}" class="px-4 py-2 bg-blue-600 text-white rounded-r">Add</button>
          </div>
          <ul id="todo-list-${uniqueId}" class="space-y-2"></ul>
        </div>`;
        codeSnippet = `
const input = document.getElementById('todo-input-${uniqueId}');
const addBtn = document.getElementById('todo-add-${uniqueId}');
const list = document.getElementById('todo-list-${uniqueId}');
let tasks = JSON.parse(localStorage.getItem('tasks-${uniqueId}')) || [];
function renderTasks() {
  list.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = 'flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-700 rounded';
    li.innerHTML = \`
      <span class="\${task.completed ? 'line-through' : ''}">\${task.text}</span>
      <div>
        <button class="complete px-2 py-1 bg-green-600 text-white rounded mr-2">\${task.completed ? 'Undo' : 'Done'}</button>
        <button class="remove px-2 py-1 bg-red-600 text-white rounded">Remove</button>
      </div>
    \`;
    li.querySelector('.complete').addEventListener('click', () => {
      tasks[index].completed = !tasks[index].completed;
      localStorage.setItem('tasks-${uniqueId}', JSON.stringify(tasks));
      renderTasks();
    });
    li.querySelector('.remove').addEventListener('click', () => {
      tasks.splice(index, 1);
      localStorage.setItem('tasks-${uniqueId}', JSON.stringify(tasks));
      renderTasks();
    });
    list.appendChild(li);
  });
}
addBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (text) {
    tasks.push({ text, completed: false });
    localStorage.setItem('tasks-${uniqueId}', JSON.stringify(tasks));
    input.value = '';
    renderTasks();
  }
});
renderTasks();
        `;
        break;

      case 'project-8': // Random Color Generator
        demoHTML = `<div id="color-generator-${uniqueId}" class="text-center">
          <button id="generate-color-${uniqueId}" class="px-4 py-2 bg-blue-600 text-white rounded">Generate Color</button>
          <p id="color-code-${uniqueId}" class="mt-4 text-lg font-bold">Click to generate a color</p>
        </div>`;
        codeSnippet = `
const button = document.getElementById('generate-color-${uniqueId}');
const colorCode = document.getElementById('color-generator-${uniqueId}').parentElement.parentElement;
const codeDisplay = document.getElementById('color-code-${uniqueId}');
button.addEventListener('click', () => {
  const color = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  colorCode.style.backgroundColor = color;
  codeDisplay.textContent = color;
});
        `;
        break;

      case 'project-9': // Digital Clock
        demoHTML = `<div id="clock-${uniqueId}" class="text-center">
          <p id="clock-display-${uniqueId}" class="text-4xl font-mono bg-gray-200 dark:bg-gray-700 p-4 rounded"></p>
        </div>`;
        codeSnippet = `
const clock = document.getElementById('clock-display-${uniqueId}');
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  clock.textContent = time;
}
setInterval(updateClock, 1000);
updateClock();
        `;
        break;

      case 'project-10': // Tip Calculator
        demoHTML = `<div id="tip-calculator-${uniqueId}" class="max-w-sm mx-auto space-y-4">
          <div>
            <label for="bill-amount-${uniqueId}" class="block">Bill Amount ($)</label>
            <input id="bill-amount-${uniqueId}" type="number" min="0" step="0.01" class="w-full p-2 border rounded" value="100">
          </div>
          <div>
            <label for="tip-percentage-${uniqueId}" class="block">Tip Percentage (%)</label>
            <input id="tip-percentage-${uniqueId}" type="number" min="0" max="100" class="w-full p-2 border rounded" value="15">
          </div>
          <div>
            <label for="num-people-${uniqueId}" class="block">Number of People</label>
            <input id="num-people-${uniqueId}" type="number" min="1" class="w-full p-2 border rounded" value="1">
          </div>
          <button id="calculate-tip-${uniqueId}" class="w-full px-4 py-2 bg-blue-600 text-white rounded">Calculate</button>
          <p id="tip-result-${uniqueId}" class="text-center font-bold"></p>
        </div>`;
        codeSnippet = `
const billInput = document.getElementById('bill-amount-${uniqueId}');
const tipInput = document.getElementById('tip-percentage-${uniqueId}');
const peopleInput = document.getElementById('num-people-${uniqueId}');
const calculateBtn = document.getElementById('calculate-tip-${uniqueId}');
const result = document.getElementById('tip-result-${uniqueId}');
calculateBtn.addEventListener('click', () => {
  const bill = parseFloat(billInput.value);
  const tipPercent = parseFloat(tipInput.value);
  const people = parseInt(peopleInput.value);
  if (isNaN(bill) || isNaN(tipPercent) || isNaN(people) || people < 1) {
    result.textContent = 'Please enter valid values';
    return;
  }
  const tipAmount = (bill * tipPercent) / 100;
  const total = bill + tipAmount;
  const perPerson = total / people;
  result.textContent = \`Tip: \$${tipAmount.toFixed(2)} | Total: \$${total.toFixed(2)} | Per Person: \$${perPerson.toFixed(2)}\`;
});
        `;
        break;
    }

    div.innerHTML = `
      <h2 class="text-2xl font-bold mb-4">${project.title}</h2>
      <p class="text-gray-700 dark:text-gray-300 mb-4">${project.description}</p>
      <div class="demo mb-4 p-4 bg-gray-100 dark:bg-gray-700 rounded">${demoHTML}</div>
      <div class="code relative">
        <pre class="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto"><code>${codeSnippet.trim()}</code></pre>
        <button class="copy-btn absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 transition-transform" data-code="${codeSnippet.trim().replace(/"/g, '"')}">Copy</button>
      </div>
    `;
    container.appendChild(div);

    // Execute the demo script
    try {
      const script = document.createElement('script');
      script.textContent = codeSnippet;
      document.body.appendChild(script);
    } catch (e) {
      console.error(`Error executing script for ${project.title}:`, e);
    }

    // Show ads after specific projects
    if ([5, 10].includes(index + 1)) {
      const adElement = document.getElementById(`ad-after-project-${index + 1}`);
      if (adElement) adElement.classList.remove('hidden');
    }
  });
  console.log('Projects rendered');
}

// Render Navigation
function renderNav() {
  console.log('Rendering navigation...');
  const nav = document.getElementById('project-nav');
  if (!nav) {
    console.error('Navigation container not found');
    return;
  }
  nav.innerHTML = '';
  projects.forEach(project => {
    const a = document.createElement('a');
    a.href = `#${project.id}`;
    a.className = 'nav-link px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700';
    a.textContent = project.title;
    a.setAttribute('role', 'listitem');
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(project.id);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      else console.error(`Project section ${project.id} not found`);
    });
    nav.appendChild(a);
  });
  console.log('Navigation rendered');
}

// Search with Autocomplete
function setupSearch() {
  const searchInput = document.getElementById('search-input');
  const suggestionsDiv = document.getElementById('search-suggestions');
  if (searchInput && suggestionsDiv) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      renderProjects(query);
      if (!query) {
        suggestionsDiv.classList.add('hidden');
        return;
      }
      const suggestions = projects
        .filter(p => p.title.toLowerCase().includes(query) || p.keywords.some(k => k.toLowerCase().includes(query)))
        .slice(0, 5)
        .map(p => `<div class="p-2 cursor-pointer" onclick="searchInput.value='${p.title}'; renderProjects('${p.title}'); suggestionsDiv.classList.add('hidden')">${p.title}</div>`);
      suggestionsDiv.innerHTML = suggestions.join('');
      suggestionsDiv.classList.toggle('hidden', suggestions.length === 0);
    });
    console.log('Search functionality set up');
  } else console.error('Search input or suggestions div not found');
}

// Theme Toggle
function setupThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
      themeToggle.querySelector('svg').classList.toggle('rotate-180');
    });
    if (localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches)
      document.documentElement.classList.add('dark');
    console.log('Theme toggle set up');
  } else console.error('Theme toggle button not found');
}

// Copy Code
function setupCopyButtons() {
  document.addEventListener('click', e => {
    if (e.target.classList.contains('copy-btn')) {
      navigator.clipboard.writeText(e.target.dataset.code).then(() => {
        e.target.textContent = 'Copied!';
        setTimeout(() => e.target.textContent = 'Copy', 2000);
      }).catch(err => console.error('Copy failed:', err));
    }
  });
  console.log('Copy buttons set up');
}

// Back to Top
function setupBackToTop() {
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => backToTop.classList.toggle('hidden', window.scrollY < 300));
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    console.log('Back to top set up');
  } else console.error('Back to top button not found');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded, initializing...');
  renderNav();
  renderProjects();
  setupSearch();
  setupThemeToggle();
  setupCopyButtons();
  setupBackToTop();
});
