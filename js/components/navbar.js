function renderNavbar() {
    const nav = document.getElementById('navbar-container');
    if (nav) {
        nav.innerHTML = `
            <nav class="navbar">
                <div class="container">
                    <a href="index.html" class="logo">E-Store</a>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="pages/cart.html">Cart</a></li>
                        <li><a href="pages/login.html">Login</a></li>
                    </ul>
                </div>
            </nav>
        `;
    }
}
renderNavbar();
