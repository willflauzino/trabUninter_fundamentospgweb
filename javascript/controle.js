// script.js
//script responsável por "capturar" as informações no arquivo header.hml e appendar na div com id "header-container" em todas págias
//Dessa maneira posso escrever o código dos menus somente uma vez e utilizá-lo em todas as páginas, facilitando desenvolvimento e manutenção do código
{
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o cabeçalho:', error));


}