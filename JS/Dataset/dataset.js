let h2 = document.querySelector('h2');
h2.dataset.test = 'hello Javascript!';
console.log('h2.dataset.test', h2.dataset.test);

//===============================================
//when select the li, show the correct img
//===============================================

let liList = document.querySelectorAll('li');
let fruitImg = document.querySelector('img');
let selectedItem = document.querySelector('.selected-item');

liList[0].addEventListener('click', selectItem);
liList[1].addEventListener('click', selectItem);
liList[2].addEventListener('click', selectItem);

function selectItem(event) {
  selectedItem.textContent = event.target.textContent;
  fruitImg.setAttribute('src', event.target.dataset.img);
}
