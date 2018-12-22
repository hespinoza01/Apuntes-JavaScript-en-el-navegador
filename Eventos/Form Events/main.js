/*
    1) submit
    2) change
    3) focus
    4) blur
    5) reset    */

const form = document.getElementById('form');
const restart = document.getElementById('restart');
const username = document.getElementById('username');
const passsword = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log('sended');
});

form.addEventListener('reset', e => {
    alert('Formulario reiniciado satisfactoriamente');
});

restart.addEventListener('change', e => {
    console.log(e);
    if(e.target.checked){
        form.reset();
    }
});