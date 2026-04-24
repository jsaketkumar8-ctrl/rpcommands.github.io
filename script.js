/* ============================================
   GLOBAL VARIABLES & CONFIG
   ============================================ */
let isAdminMode = false;
const sectionNames = {
  sahp: 'SAHP',
  lspd: 'LSPD',
  gov: 'GOV',
  fib: 'FIB',
  ng: 'NG'
};

// Default data structure
const defaultData = {
  sahp: [
    {
      id: 1,
      title: 'Call Sign Protocol',
      content: 'All units must use official call signs. Example: "SAHP-1 to dispatch"',
      category: 'Protocol'
    },
    {
      id: 2,
      title: 'Traffic Stop Procedure',
      content: 'Approach vehicle cautiously. Request license, registration, and insurance. Follow Miranda rights procedure for citations.',
      category: 'Procedure'
    }
  ],
  lspd: [
    {
      id: 1,
      title: 'Officer Badge Format',
      content: 'Badge format: LSPD-[First Initial][Last Name]-[Number]',
      category: 'Format'
    },
    {
      id: 2,
      title: 'Ten-Codes Reference',
      content: '10-4: Acknowledged | 10-10: Out of service | 10-23: Arrived scene',
      category: 'Reference'
    }
  ],
  gov: [
    {
      id: 1,
      title: 'Department Motto',
      content: 'Serving with integrity, transparency, and dedication to the people.',
      category: 'General'
    }
  ],
  fib: [
    {
      id: 1,
      title: 'Agency Classification',
      content: 'Federal Investigation Bureau - Task Force Alpha. Classified operations.',
      category: 'Classification'
    }
  ],
  ng: [
    {
      id: 1,
      title: 'National Guard Mission',
      content: 'Protect and serve the nation during emergencies and critical situations.',
      category: 'Mission'
    }
  ]
};

/* ============================================
   INITIALIZATION
   ============================================ */
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  setupEventListeners();
  loadThemePreference();
  showLoginModal();
});

function initializeApp() {
  // Initialize localStorage with default data if empty
  const sections = Object.keys(sectionNames);
  sections.forEach(section => {
    if (!localStorage.getItem(section)) {
      localStorage.setItem(section, JSON.stringify(defaultData[section]));
    }
  });
}

function setupEventListeners() {
  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // Logo link to home
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  }

  // Search functionality
  const searchBox = document.getElementById('searchBox');
  if (searchBox) {
    searchBox.addEventListener('input', filterCards);
  }

  // Modal buttons
  const loginBtn = document.getElementById('loginBtn');
  const cancelBtn = document.getElementById('cancelBtn');
  if (loginBtn) loginBtn.addEventListener('click', handleLogin);
  if (cancelBtn) cancelBtn.addEventListener('click', closeLoginModal);

  // Enter key in password field
  const passwordInput = document.getElementById('password');
  if (passwordInput) {
    passwordInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') handleLogin();
    });
  }
}

/* ============================================
   THEME TOGGLE
   ============================================ */
function toggleTheme() {
  const body = document.body;
  const isDarkMode = body.classList.contains('light-mode');
  
  if (isDarkMode) {
    body.classList.remove('light-mode');
    localStorage.setItem('theme', 'dark');
    updateThemeIcon(false);
  } else {
    body.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
    updateThemeIcon(true);
  }
}

function loadThemePreference() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    updateThemeIcon(true);
  } else {
    updateThemeIcon(false);
  }
}

function updateThemeIcon(isLight) {
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.textContent = isLight ? '🌙' : '☀️';
  }
}

/* ============================================
   LOGIN & ADMIN MODE
   ============================================ */
function showLoginModal() {
  const modal = document.getElementById('loginModal');
  if (modal) {
    modal.classList.add('active');
  }
}

function closeLoginModal() {
  const modal = document.getElementById('loginModal');
  if (modal) {
    modal.classList.remove('active');
  }
}

function handleLogin() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Simple hardcoded credentials (DEMO ONLY)
  if (username === 'Saket' && password === 'Saket123') {
    isAdminMode = true;
    closeLoginModal();
    showAdminIndicator();
    showToast('Admin mode activated!', 'success');
    loadPageContent();
  } else if (username || password) {
    showToast('Invalid credentials. Access as guest.', 'error');
    closeLoginModal();
    loadPageContent();
  } else {
    // Empty fields - proceed as guest
    closeLoginModal();
    loadPageContent();
  }
}

function showAdminIndicator() {
  const indicator = document.getElementById('adminIndicator');
  if (indicator) {
    indicator.classList.add('active');
  }
}

function logoutAdmin() {
  isAdminMode = false;
  const indicator = document.getElementById('adminIndicator');
  if (indicator) {
    indicator.classList.remove('active');
  }
  showToast('Logged out from admin mode', 'success');
  location.reload();
}

/* ============================================
   TEXT CARD MANAGEMENT
   ============================================ */
function loadPageContent() {
  const currentPage = getCurrentPage();
  if (currentPage === 'index') {
    return; // Homepage has different content
  }
  
  loadCards(currentPage);
  renderCards(currentPage);
}

function getCurrentPage() {
  const path = window.location.pathname;
  const filename = path.substring(path.lastIndexOf('/') + 1).replace('.html', '');
  return filename === '' ? 'index' : filename;
}

function loadCards(section) {
  const data = localStorage.getItem(section);
  return data ? JSON.parse(data) : [];
}

function saveCards(section, cards) {
  localStorage.setItem(section, JSON.stringify(cards));
}

function renderCards(section) {
  const cards = loadCards(section);
  const container = document.querySelector('.cards-container');
  
  if (!container) return;

  container.innerHTML = '';

  if (cards.length === 0) {
    container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 40px;">No text cards available.</p>';
    return;
  }

  cards.forEach((card, index) => {
    const cardEl = createCardElement(card, section, index);
    container.appendChild(cardEl);
  });

  // Add new card button if admin
  if (isAdminMode) {
    const addBtn = document.createElement('div');
    addBtn.className = 'text-card';
    addBtn.innerHTML = `
      <button class="btn-add" onclick="openAddCardForm('${section}')">
        ➕ Add New Text
      </button>
    `;
    container.appendChild(addBtn);
  }
}

function createCardElement(card, section, index) {
  const cardEl = document.createElement('div');
  cardEl.className = 'text-card';
  cardEl.id = `card-${card.id}`;

  let cardHTML = `
    <div class="card-header">
      <div>
        ${card.title ? `<div class="card-title">${escapeHtml(card.title)}</div>` : ''}
        ${card.category ? `<div class="card-tag">${escapeHtml(card.category)}</div>` : ''}
      </div>
    </div>
    <div class="card-content">${escapeHtml(card.content)}</div>
    <div class="card-actions">
      <button class="btn-copy" onclick="copyToClipboard('${escapeHtml(card.content)}')">
        📋 Copy
      </button>
  `;

  if (isAdminMode) {
    cardHTML += `
      <button class="btn-edit" onclick="openEditCardForm('${section}', ${card.id})">
        ✏️ Edit
      </button>
      <button class="btn-delete" onclick="deleteCard('${section}', ${card.id})">
        🗑️ Delete
      </button>
    `;
  }

  cardHTML += '</div>';
  cardEl.innerHTML = cardHTML;
  return cardEl;
}

/* ============================================
   CARD OPERATIONS
   ============================================ */
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('✓ Text copied to clipboard!', 'success');
  }).catch(err => {
    showToast('Failed to copy text', 'error');
  });
}

function deleteCard(section, cardId) {
  if (!confirm('Are you sure you want to delete this card?')) return;

  let cards = loadCards(section);
  cards = cards.filter(card => card.id !== cardId);
  saveCards(section, cards);
  renderCards(section);
  showToast('Card deleted successfully', 'success');
}

function openAddCardForm(section) {
  const title = prompt('Enter card title (optional):');
  if (title === null) return;

  const category = prompt('Enter category (optional):');
  if (category === null) return;

  const content = prompt('Enter card content:');
  if (content === null) return;

  const cards = loadCards(section);
  const newCard = {
    id: Date.now(),
    title: title || 'Untitled',
    content: content,
    category: category || undefined
  };

  cards.push(newCard);
  saveCards(section, cards);
  renderCards(section);
  showToast('New card added!', 'success');
}

function openEditCardForm(section, cardId) {
  const cards = loadCards(section);
  const card = cards.find(c => c.id === cardId);
  if (!card) return;

  const newTitle = prompt('Edit title:', card.title);
  if (newTitle === null) return;

  const newCategory = prompt('Edit category:', card.category || '');
  if (newCategory === null) return;

  const newContent = prompt('Edit content:', card.content);
  if (newContent === null) return;

  card.title = newTitle;
  card.category = newCategory || undefined;
  card.content = newContent;

  saveCards(section, cards);
  renderCards(section);
  showToast('Card updated!', 'success');
}

/* ============================================
   SEARCH & FILTER
   ============================================ */
function filterCards() {
  const searchBox = document.getElementById('searchBox');
  if (!searchBox) return;

  const searchTerm = searchBox.value.toLowerCase();
  const cards = document.querySelectorAll('.text-card');

  cards.forEach(card => {
    const title = (card.querySelector('.card-title')?.textContent || '').toLowerCase();
    const content = (card.querySelector('.card-content')?.textContent || '').toLowerCase();
    const category = (card.querySelector('.card-tag')?.textContent || '').toLowerCase();
    const hasButton = card.querySelector('.btn-add');

    if (hasButton) {
      card.style.display = 'flex';
      return;
    }

    const matches = title.includes(searchTerm) || 
                   content.includes(searchTerm) || 
                   category.includes(searchTerm);

    card.style.display = matches ? 'block' : 'none';
  });
}

/* ============================================
   TOAST NOTIFICATION
   ============================================ */
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */
function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.text-card').forEach(card => {
    observer.observe(card);
  });
}

// Call observer on page load
window.addEventListener('load', function() {
  observeElements();
});
