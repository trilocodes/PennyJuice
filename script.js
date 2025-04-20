
const overlay = document.getElementById('authOverlay');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

function openAuth() {
overlay.style.display = 'flex';
showLogin(); // Default
}

function closeAuth() {
overlay.style.display = 'none';
}

function showLogin() {
loginForm.classList.remove('hidden');
signupForm.classList.add('hidden');
}

function showSignup() {
loginForm.classList.add('hidden');
signupForm.classList.remove('hidden');
}

