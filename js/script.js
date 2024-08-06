function loadContent(page, element) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
            updateNavLinks(element);
            initSwiper();  // Inicializa Swiper después de cargar el contenido
        })
        .catch(error => console.log('Error loading page:', error));
}

function updateNavLinks(activeElement) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active', 'disabled');
    });
    activeElement.classList.add('active', 'disabled');
}

function initSwiper() {
    new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

// Cargar la página de inicio por defecto
window.onload = () => {
    loadContent('html/inicio.html', document.querySelector('.nav-link'));
};

document.addEventListener('DOMContentLoaded', (event) => {
    // Cualquier código JS adicional que necesites
});