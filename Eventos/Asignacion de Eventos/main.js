const content = document.getElementById('content');

content.addEventListener('click', e => {
    let target = e.target,
        items = Array.from(content.querySelectorAll('div'));
        index = items.indexOf(target);

    alert(`Hiciste click en la caja ${index + 1}`);
});