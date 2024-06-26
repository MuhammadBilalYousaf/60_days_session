document.addEventListener('DOMContentLoaded', () => {
    // FAQ toggle functionality
    const faqs = document.querySelectorAll('.faq');

    faqs.forEach(faq => {
        const toggle = faq.querySelector('.faq-toggle');

        toggle.addEventListener('click', () => {
            faq.classList.toggle('active');
            if (faq.classList.contains('active')) {
                toggle.innerHTML = '<i class="fa fa-minus">&#8722;</i>';
            } else {
                toggle.innerHTML = '<i class="fa fa-plus">&#43;</i>';
            }
        });
    });

    // Menu toggle functionality for small screens
    const menuToggle = document.querySelector('.menu-toggle');
    const menuItems = document.querySelectorAll('#navbar #menu ul>li');

    function toggleMenu() {
        if (window.innerWidth <= 480) {
            menuToggle.style.display = 'block';
            menuItems.forEach(item => {
                item.style.display = 'none'; // Hide menu items initially
            });
        } else {
            menuToggle.style.display = 'none';
            menuItems.forEach(item => {
                item.style.display = 'block'; // Show menu items on larger screens
            });
        }
    }

    // Initial check
    toggleMenu();

    // Check on window resize
    window.addEventListener('resize', toggleMenu);

    menuToggle.addEventListener('click', () => {
        menuItems.forEach(item => {
            if (item.style.display === 'block') {
                item.style.display = 'none';
            } else {
                item.style.display = 'block';
            }
        });
    });
});
