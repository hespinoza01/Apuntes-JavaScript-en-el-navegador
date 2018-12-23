const parent = document.getElementById('parent');
const childs = Array.from(parent.children);
const newElement = document.createElement('h3');
const childWithChilds = childs.filter(child => child.children.length > 0)[0];

newElement.textContent = "Nuevo elemento";
parent.appendChild(newElement);
console.log(childWithChilds);

const child3 = childs.filter(child => child.textContent.trim() === 'Hijo 3')[0];
console.log(child3);

parent.insertBefore(newElement, child3);