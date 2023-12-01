
const blogLoginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-blog-login').value.trim();
    const password = document.querySelector('#password-blog-login').value.trim();

    if (username && password) {

      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/'); 
      } else {
 
        alert('Failed to log in.');
      }
    }
  };
  

  const chessLoginForm = document.querySelector('.blog-login-form');
  if (chessLoginForm) {
    chessLoginForm.addEventListener('submit', blogLoginFormHandler);
  }
  