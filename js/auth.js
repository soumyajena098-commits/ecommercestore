const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        loginUser(email, password);
    });
}

async function loginUser(email, password) {
    try {
        const response = await apiLogin(email, password);
        if (response.success) {
            saveToken(response.token);
            window.location.href = '../index.html';
        }
    } catch (err) {
        console.error('Login failed', err);
    }
}
