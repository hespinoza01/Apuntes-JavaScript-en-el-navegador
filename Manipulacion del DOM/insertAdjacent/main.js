/*
Métodos
    -insertAdjacentElement(position, el)
    -insertAdjacentHTML(position, html)
    -insertAdjacentText(position, text)

Posiciones
    -beforebegin
    -afterbegin
    -beforeend
    -afterend   */


const parent = document.getElementById('parent'),
      newElement = document.createElement('div');

newElement.textContent = "Nuevo elemento";

parent.insertAdjacentElement('beforebegin', newElement);
parent.insertAdjacentElement('afterbegin', newElement);
parent.insertAdjacentElement('afterend', newElement);
parent.insertAdjacentElement('beforeend', newElement);

parent.insertAdjacentText('beforebegin', "Elemento de texto");

parent.insertAdjacentHTML('afterend', `<h1>Título al final del padre</h1>`);