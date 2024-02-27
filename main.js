const secretButton = document.getElementById('secretButton');
const secretForm = document.getElementById('secretForm');
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const gameFrame = document.getElementById('gameFrame');

secretButton.addEventListener('click', () => {
  secretForm.classList.toggle('hidden');
});

async function fetchPasswords() {
  try {
    const response = await fetch('passwords.json');
    const passwords = await response.json();
    return passwords;
  } catch (error) {
    console.error('Error fetching passwords:', error);
    return null;
  }
}

async function checkLogin(username, password) {
  const passwords = await fetchPasswords();
  if (!passwords) {
    return false;
  }
  return passwords[username] === password;
}

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;
  const isLoggedIn = await checkLogin(username, password);
  if (isLoggedIn) {
    // Show the iframe once logged in
    gameFrame.classList.remove('hidden');
    secretForm.classList.add('hidden');
  } else {
    alert('Incorrect username or password. Please try again.');
  }
});