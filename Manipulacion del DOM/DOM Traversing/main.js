/*
Hijos
    -childNodes
    -children
    -firstChild
    -firstElementChild
    -lastChild
    -lastElementChild
    -hasChildNodes

Hermanos
    -nextSibling
    -nextElementSibling
    -previousSibling
    -previousElementSibling

Padre
    -parentNode
    -parenElement*/


const parent = document.getElementById('parent');

// Hijos
console.log(parent);
console.log(parent.children);
console.log(parent.childNodes);
console.log(parent.firstChild);
console.log(parent.firstElementChild);
console.log(parent.lastChild);
console.log(parent.lastElementChild);
console.log(parent.hasChildNodes());


// Hermanos
const grandson = document.getElementById('grandson-2');

console.log(grandson);
console.log(grandson.nextSibling);
console.log(grandson.nextElementSibling);
console.log(grandson.previousSibling);
console.log(grandson.previousElementSibling);

// Padres
console.log(grandson.parentNode);
console.log(grandson.parentElement);
console.log(grandson.parentElement.parentElement);