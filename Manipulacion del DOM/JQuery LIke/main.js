const parent = document.getElementById('parent'),
    oldChild = document.getElementById('oldChild'),
    newChild = document.createElement('button');

newChild.textContent = "newChild";

parent.before(newChild);
parent.after(newChild);
parent.prepend(newChild);
parent.append(newChild);

oldChild.replaceWith(newChild);