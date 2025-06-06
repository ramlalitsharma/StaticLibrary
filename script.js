// Project Data (10 Functional Projects)
const projects = [
  {
    id: 'project-1',
    title: 'Expanding Cards',
    keywords: ['expanding', 'cards', 'animation', 'css', 'js'],
    description: 'Expanding Cards is an engaging gallery where cards expand on click with smooth CSS animations, perfect for portfolios, product showcases, or galleries. Built with CSS flexbox and JavaScript, it teaches event handling and transitions. Customize card content, colors, or animations to match your site’s theme. Ideal for beginners or professionals enhancing UX, it boosts engagement by making content interactive. To implement, create a flex container with cards and toggle their width on click. Copy the code below to start building your own animated gallery and experiment with styles for a unique look.'
  },
  {
    id: 'project-2',
    title: 'Progress Steps',
    keywords: ['progress', 'steps', 'wizard', 'form', 'js'],
    description: 'Progress Steps is a multi-step progress bar for forms, checkout processes, or wizards, commonly used in e-commerce or sign-up flows. It visually tracks user progress with animated transitions, styled with CSS for responsiveness. JavaScript updates steps and buttons dynamically, teaching DOM manipulation and state management. Customize colors, step counts, or animations to fit your brand. This project improves UX by guiding users through complex tasks. To use, define steps in HTML and control navigation with JavaScript. Copy the code below to enhance form usability on your site.'
  },
  {
    id: 'project-3',
    title: 'Rotating Navigation',
    keywords: ['rotating', 'navigation', 'menu', 'css', 'js'],
    description: 'Rotating Navigation features a hamburger menu that rotates to reveal links, ideal for mobile-friendly sites like blogs or portfolios. Using CSS transforms and JavaScript, it creates a compact, animated navigation experience. Developers can integrate it into apps to save space and improve usability. To implement, create a toggle button and animate the menu with CSS rotations. This project teaches animations and toggling logic. Customize styles for unique menus. Copy the code below to add this modern navigation to your project.'
  },
  {
    id: 'project-4',
    title: 'Hidden Search Widget',
    keywords: ['search', 'widget', 'animation', 'css', 'js'],
    description: 'The Hidden Search Widget is a space-saving search input that toggles with a button, perfect for minimalist headers in blogs or e-commerce sites. Built with CSS animations and JavaScript, it slides in smoothly and auto-focuses for convenience. To use, add a button and input, then toggle visibility with JavaScript. This project teaches CSS transitions and event listeners, ideal for beginners. Customize styles to match your design. It keeps headers clean while providing search functionality. Copy the code below to integrate this widget.'
  },
  {
    id: 'project-5',
    title: 'Blurry Loading Placeholder',
    keywords: ['blurry', 'loading', 'placeholder', 'css', 'js'],
    description: 'Blurry Loading Placeholder creates a smooth loading effect for content, transitioning from a blurred state to clear. It’s ideal for galleries or content-heavy sites, enhancing perceived performance. Using CSS filters and JavaScript, it applies a blur until content loads. To use, add a container with a blur class and remove it on load. This project teaches CSS filters and event handling. Customize blur intensity or transitions. It improves UX by making loading seamless. Copy the code below to add this effect to your site.'
  },
  {
    id: 'project-6',
    title: 'Simple Counter',
    keywords: ['counter', 'javascript', 'button', 'increment', 'decrement'],
    description: 'Simple Counter is a beginner-friendly project with increment and decrement buttons. It’s great for tracking quantities in e-commerce, scores in games, or stats in apps. JavaScript updates the count dynamically, teaching event listeners and DOM manipulation. To use, create buttons and a display, then add click handlers. Customize colors or add animations for flair. This project is perfect for learning JavaScript basics. Use it in quantity selectors or educational tools. Copy the code below to build your counter.'
  },
  {
    id: 'project-7',
    title: 'To-Do List',
    keywords: ['todo', 'list', 'task', 'javascript', 'localstorage'],
    description: 'The To-Do List app allows users to add, complete, and remove tasks with localStorage for persistence. It’s ideal for productivity apps or personal projects, teaching arrays, DOM updates, and storage APIs. To use, create an input, button, and list, then manage tasks with JavaScript. Customize with features like due dates or categories. Pair it with a premium planner for offline tracking. <a href="https://s.shopee.com.my/6AZ3j3CYfT" target="_blank" rel="nofollow" class="text-blue-600 hover:underline">Get a productivity planner on Shopee</a> to stay organized. Copy the code below to build your task manager.'
  },
  {
    id: 'project-8',
    title: 'Random Color Generator',
    keywords: ['color', 'generator', 'random', 'javascript', 'css'],
    description: 'Random Color Generator creates random colors and applies them to the background, displaying the hex code. It’s perfect for designers or creative apps. A button triggers color changes, teaching random number generation and DOM styling. To use, add a button and display, then generate colors with JavaScript. Customize with color formats or history logs. This project is great for learning JavaScript math functions. Use it in design tools or portfolios. Copy the code below to add this fun feature to your site.'
  },
  {
    id: 'project-9',
    title: 'Digital Clock',
    keywords: ['clock', 'digital', 'time', 'javascript', 'css'],
    description: 'Digital Clock displays the current time, updating every second. It’s ideal for dashboards, apps, or personal sites, teaching the Date API and intervals. To use, create a display element and update it with a timer. Customize fonts or add AM/PM indicators. This project is perfect for learning JavaScript timing functions. Use it to enhance interfaces with live time displays. It’s simple yet practical for adding functionality. Copy the code below to integrate this clock.'
  },
  {
    id: 'project-10',
    title: 'Tip Calculator',
    keywords: ['calculator', 'tip', 'bill', 'javascript', 'math'],
    description: 'Tip Calculator computes tip amounts and total bills per person based on bill, tip percentage, and people. It’s great for restaurant apps or finance tools, teaching form inputs and math operations. To use, create input fields and a button, then display results with JavaScript. Customize with tax calculations or presets. This project is ideal for learning JavaScript forms. Use it to simplify bill splitting for users. Copy the code below to build your calculator.'
  }
];

// Render Projects
function renderProjects(filter = '') {
  const container = document.getElementById('projects-container');
  if (!container) {
    console.error('Projects container not found');
    return;
  }
  container.innerHTML = '';
  const filteredProjects = filter
    ? projects.filter(p => p.title.toLowerCase().includes(filter.toLowerCase()) || p.keywords.some(k => k.toLowerCase().includes(filter.toLowerCase())))
    : projects;
  if (filteredProjects.length === 0) {
    container.innerHTML = '<p class="text-center text-gray-500 dark:text-gray-400">No projects found. Try a different search term.</p>';
    return;
  }
  filteredProjects.forEach(project => {
    const uniqueId = `${project.id}-${Math.random().toString(36).substr(2, 9)}`;
    const div = document.createElement('div');
    div.id = project.id;
    div.className = 'project bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6';
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
      case 'project-3':
        demoHTML = `<div id="rotating-nav-${uniqueId}" class="text-center" loading="lazy">
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
      case 'project-4':
        demoHTML = `<div id="hidden-search-${uniqueId}" class="text-center" loading="lazy">
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
      case 'project-5':
        demoHTML = `<div id="blurry-loading-${uniqueId}" class="max-w-sm mx-auto" loading="lazy">
          <div id="blur-placeholder-${uniqueId}" class="w-full h-48 bg-gray-300 blur-md transition-all duration-500"></div>
        </div>`;
        codeSnippet = `
const placeholder = document.getElementById('blur-placeholder-${uniqueId}');
setTimeout(() => {
  placeholder.classList.remove('blur-md');
}, 1000);
        `;
        break;
      case 'project-6':
        demoHTML = `<div id="counter-${uniqueId}" class="text-center" loading="lazy">
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
      case 'project-7':
        demoHTML = `<div id="todo-${uniqueId}" class="max-w-md mx-auto" loading="lazy">
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
  });
}
renderTasks();
        `;
        break;
      case 'project-8':
        demoHTML = `<div id="color-generator-${uniqueId}" class="text-center" loading="lazy">
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
      case 'project-9':
        demoHTML = `<div id="clock-${uniqueId}" class="text-center" loading="lazy">
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
      case 'project-10':
        demoHTML = `<div id="tip-calculator-${uniqueId}" class="max-w-sm mx-auto space-y-4" loading="lazy">
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
        <button class="copy-btn absolute top-2 right-2 bg-blue-600 text-white px-2 
