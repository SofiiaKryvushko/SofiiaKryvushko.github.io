const list = document.querySelector('.list');
let buttonPlus = document.querySelector('.plus');
let buttonMinus = document.querySelector('.minus');

buttonPlus.addEventListener('click', function () {
    const inputText = document.querySelector('input').value;
    let newPosition = document.createElement('li');
    newPosition.innerHTML = inputText;
    newPosition.classList.add('list__item');
    list.append(newPosition);
});

list.addEventListener('click', onListClick);
function onListClick(e) {
    const child = e.target.closest('.list__item');
    if (!child) return;
    if(child.classList.contains('clicked')){
        child.style.backgroundColor = '';
        child.classList.remove('clicked');
    } else {
        child.classList.add('clicked');
        child.style.backgroundColor = '#008000';
    }
    buttonMinus.addEventListener('click', function () {
        if(child.classList.contains('clicked'))
        child.remove();
    });
}



