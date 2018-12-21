const input = document.getElementById('textbox');
const eventType = document.getElementById('eventType');
const keyValue = document.getElementById('keyValue');

/*
input.addEventListener('keypress', e => {
    e.preventDefault();
    console.log(e);
    eventType.textContent = 'KeyPress';
    keyValue.textContent = e.code;
});*/

input.addEventListener('keyup', e => {
    console.log(e);
});

// KeyDown event
