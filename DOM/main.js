show_head_content.textContent = document.head;

console.log(document.body);
console.log(document.images);
console.log(document.scripts);


/*
    -- Selectores de Nodos --

    1) document.getElementById()

    2) document.getElementByClassName()

    3) document.getElementByTagName()

    4) document.querySelector()
          element.querySelector()

    5) document.querySelectorAll()
          element.querySelectorAll()
*/

setTimeout(() => {
    const titulo = document.getElementById('title');
    titulo.textContent = `${titulo.textContent} v2`;

    console.log(document.querySelector('h3'));
    console.log(document.querySelectorAll('h3'));
    console.log(document.querySelectorAll('ul li'));
}, 2000);


/*
    - - Atributos
    1) getAttribute()

    2) setAttribute()

    3) classList
           .add()
           .remove()
           .toggle()

    4) id
    5) value
*/

const ul = document.querySelector('ul');

console.log(ul.getAttribute('class'));
ul.setAttribute('class', 'someClass');
console.log(ul.getAttribute('class'));


/*
    - - Contenido
    1) textContent
    2) innerHTNL
    3) outerHTML
*/

const title = document.getElementById('title');
console.log(title.textContent);
console.log(title.innerHTML);
console.log(title.outerHTML);