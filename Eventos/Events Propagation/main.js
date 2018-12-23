/*
document.querySelectorAll('div').forEach(node => {
    node.addEventListener('click', e => {
        console.log(`click en ${e.target.id}`);
    });
});*/

document.querySelectorAll('div').forEach(node => {
    node.addEventListener('click', e => {
        console.log(`click en ${e.target.id}`);
        e.stopPropagation();
    });
});
