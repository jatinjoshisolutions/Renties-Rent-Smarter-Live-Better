document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('loginBtn');
  const validUsername = 'jatin001';
  const validPassword = 'Jarn@1725';

  loginBtn.addEventListener('click', () => {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
      // Redirect to home page or dashboard
      window.location.href = 'home.html'; 
    } else {
      alert('Wrong username or password');
    }
  });
});
