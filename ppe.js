document.addEventListener('DOMContentLoaded', function () {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    const carouselImages = document.querySelectorAll('.carousel-image');
    let currentImageIndex = 0;

    // Navegação entre abas
    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove a classe 'active' de todas as abas e links
            tabLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Adiciona a classe 'active' na aba e link clicados
            const target = link.getAttribute('href');
            const targetContent = document.querySelector(target);
            targetContent.classList.add('active');
            link.classList.add('active');
        });
    });

    // Carrossel de Fotos
    function startCarousel() {
        setInterval(() => {
            carouselImages[currentImageIndex].classList.remove('active');
            currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
            carouselImages[currentImageIndex].classList.add('active');
        }, 3000); // Troca de imagem a cada 3 segundos
    }

    startCarousel();
});