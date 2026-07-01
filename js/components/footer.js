function renderFooter() {
    const footer = document.getElementById('footer-container');
    if (footer) {
        footer.innerHTML = `
            <footer class="footer">
                <div class="container">
                    <p>&copy; 2026 E-Commerce Store. All rights reserved.</p>
                </div>
            </footer>
        `;
    }
}
renderFooter();
