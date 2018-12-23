const content = document.getElementById('content'),
      title = document.getElementById('title'),
      showMore = document.getElementById('showMore');

// Con el valor de true clona el elemento junto con todos los hijos que contenga,
// con false, solo clona el elemento
let titleClone = title.cloneNode(true);

setTimeout(() => {
    content.append(titleClone);
    content.removeChild(showMore);
}, 5000);

setTimeout(() => {
    titleClone.remove();
}, 10000);