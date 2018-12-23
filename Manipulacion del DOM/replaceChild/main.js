const parent = document.getElementById('parent'),
      oldChild = document.getElementById('oldChild'),
      newChild = document.createElement('button');

newChild.textContent = "newChild";

 setTimeout(()=>{
    parent.replaceChild(newChild, oldChild);
 }, 1500);