const title = document.querySelector('h1'),
      description = document.querySelector('p');

title.style.backgroundColor = 'tomato';
title.style.padding = '1em';

const mediumBP = matchMedia('(min-width: 640px) and (orientation: portrait)');
console.log(mediumBP);

const changeColor = () => {
    if(mediumBP.matches){
        document.body.style.backgroundColor = 'yellow';
    }else{
        document.body.style.backgroundColor = 'tomato';
    }
};

addEventListener('DOMContentLoaded', changeColor);
addEventListener('resize', changeColor);


console.log(getComputedStyle(title).fontSize);
console.log(title.getBoundingClientRect());