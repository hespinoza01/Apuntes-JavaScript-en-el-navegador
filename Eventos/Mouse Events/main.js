const board = document.getElementById('board');
const counterDisplay = document.getElementById('dblclick-counter');

board.addEventListener('mouseenter', () => {
    board.style.backgroundColor = 'tomato';
});

board.addEventListener('mouseleave', () => {
    board.style.backgroundColor = 'greenyellow';
});

board.addEventListener('dblclick', () => {
    counterDisplay.textContent = Number(counterDisplay.textContent) + 1;
});

board.addEventListener('contextmenu', e => {
    e.preventDefault();
    console.log(`Coordenadas: ${e.pageX}, ${e.pageY}`);
});

/*
    mousedown
    mouseup
    mousemove
*/