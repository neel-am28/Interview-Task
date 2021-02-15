const navbarItems = document.querySelectorAll('li.nav-item');
navbarItems.forEach(link => {
    link.addEventListener('click', () => {
        link.classList.add('active');
        navbarItems.forEach(item => {
            if (link.classList !== item.classList) {
                item.classList.remove('active');
            }
        })
    })
})