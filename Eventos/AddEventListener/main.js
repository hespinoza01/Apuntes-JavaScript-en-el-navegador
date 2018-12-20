const title = document.getElementById('title');
const btn = document.getElementById('btn');
const mostrarSaludo = document.getElementById('mostrarSaludo');

const saludo = e => alert(e.target.textContent);


title.addEventListener('click', e => {
    saludo(e);
});

btn.addEventListener('click', e => {
    saludo(e);
});

mostrarSaludo.addEventListener('click', e => {
    let valorSaludo = document.getElementById('valorSaludo');

    alert(valorSaludo.value);
    valorSaludo.value = '';
});