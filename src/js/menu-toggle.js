 // Aguarda o DOM estar completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const containerMenu = document.querySelector('.container-menu');
    
    // Verifica se os elementos existem
    if (menuToggle && containerMenu) {
        menuToggle.addEventListener('click', function() {
            containerMenu.classList.toggle('open');
            console.log('Menu toggle clicked, menu is now:', containerMenu.classList.contains('open') ? 'open' : 'closed');
        });
    } else {
        console.error('Elementos do menu não encontrados:', {
            menuToggle: !!menuToggle,
            containerMenu: !!containerMenu
        });
    }
});

