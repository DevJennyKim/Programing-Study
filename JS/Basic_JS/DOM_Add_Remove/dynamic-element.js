// li.textContent = 'DeadLift'; //
// ul.appendChild(li); //add the child to parent element

let btnBefore = document.getElementById('before');
let btnAdd = document.getElementById('button');
let input = document.querySelector('input');
let removeTargetBtn = document.getElementById('target-remove');
let removeBtn = document.querySelector('.remove-btn');
// buttonBefore.addEventListener('click', function () {
//   alert(input.value);
// });

//=========================================================================
//create the element in the html ul when there is a click event
//=========================================================================
btnAdd.addEventListener('click', function () {
  let li = document.createElement('li'); // createElement() :create the element in the parentheses to the html
  let ul = document.getElementById('item_list');
  let btn = document.createElement('button'); //create the btn
  li.textContent = input.value; //put the value from the input content
  li.setAttribute('id', 'item'); //when making new li add the id
  btn.textContent = 'X'; //when making the btn add the value 'X'
  btn.setAttribute('class', 'remove-btn'); //set the class 'remove-btn' when making the btn
  btn.addEventListener('click', function (event) {
    //Set the click event to remove the target.
    event.target.parentNode.remove(); //parameter>target(btn(X))>parentNode li
  });
  li.appendChild(btn); //under the li
  ul.appendChild(li); //under the ul
});

//====================================================================================
//create the element(new li) before the existed li  when there is a click event
//====================================================================================
btnBefore.addEventListener('click', function () {
  let targetItem = document.querySelector('li#item');
  let li = document.createElement('li'); // createElement() :create the element in the parentheses to the html
  let ul = document.getElementById('item_list');
  let btn = document.createElement('button');
  li.textContent = input.value;
  li.setAttribute('id', 'item');
  btn.textContent = 'X';
  btn.setAttribute('class', 'remove-btn');
  btn.addEventListener('click', function (event) {
    event.target.parentNode.remove();
  });
  li.appendChild(btn);
  ul.insertBefore(li, targetItem); //insert before li what has the id item. still need to be under the ul
});

//====================================================================================
// remove the items
//====================================================================================

removeTargetBtn.addEventListener('click', function () {
  let targetItem = document.querySelector('li#item');
  targetItem.remove(); //remove what has the id item.
});
removeBtn.addEventListener('click', function (event) {
  console.log(event.target.parentNode);
  event.target.parentNode.remove();
});
