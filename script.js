// script.js - Commun pour toutes les pages
function initThemeToggle(buttonId, iconId, textId) {
  const button = document.getElementById(buttonId) || document.querySelector('#theme-toggle');
  const icon = document.getElementById(iconId) || document.querySelector('#theme-icon');
  const text = document.getElementById(textId) || document.querySelector('#theme-text');
  const html = document.documentElement;
  
  // Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.classList.toggle('dark', savedTheme === 'dark');
  html.classList.toggle('light', savedTheme === 'light');
  
  button?.addEventListener('click', () => {
    const isDark = html.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';
    html.classList.toggle('dark', newTheme === 'dark');
    html.classList.toggle('light', newTheme === 'light');
    localStorage.setItem('theme', newTheme);
    icon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    text.textContent = newTheme === 'dark' ? 'Thème Clair' : 'Thème Sombre';
  });
  
  // Set initial
  icon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
  text.textContent = savedTheme === 'dark' ? 'Thème Clair' : 'Thème Sombre';
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu?.classList.toggle('hidden');
}

// Form validation example (pour contact)
function validateForm(form) {
  const email = form.querySelector('input[type="email"]').value;
  if (!email.includes('@')) { alert('Email invalide'); return false; }
  return true;
}