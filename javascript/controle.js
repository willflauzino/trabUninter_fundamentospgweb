// script.js
//Controle para colapsar o menu em caso a tela seja pequena (facilita a navegação pelo celular)
{
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
}