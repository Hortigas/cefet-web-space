document.querySelector('#calcular').addEventListener('click', () => {
    let constante = document.querySelector('#constante').value;
    let massa1 = document.querySelector('#massa1').value;
    let massa2 = document.querySelector('#massa2').value;
    let distancia = document.querySelector('#distancia').value;

    document.querySelector('#resultado').value = ((constante * massa1 * massa2) / Math.pow(distancia, 2)).toExponential(2);
});
