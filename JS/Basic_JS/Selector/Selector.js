//===============================================
// Query Selector
//===============================================
let input = document.querySelector('input');
input.setAttribute('placeholder', 'Changed'); //=>change the input's placeholder
input.setAttribute('required', ''); //=> don't need a value for required.
input.removeAttribute('placeholder'); //=>remove

//===============================================
// Style
//===============================================
let helloItem = document.querySelector('.hello');
// helloItem.style.color = 'blue';
// helloItem.style.backgroundColor = 'yellow';
helloItem.classList.add('dark');
helloItem.classList.remove('dark');
