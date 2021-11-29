// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

for (let i of document.querySelectorAll('.botao-expandir-retrair')) {
    i.addEventListener('click', (evt) => {
        const button = evt.currentTarget;
        button.innerHTML === '+' ? (button.innerHTML = '-') : (button.innerHTML = '+');
        button.parentNode.classList.toggle('expandido');
    });
}
