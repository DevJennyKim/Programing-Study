let rectangle = document.querySelector('#rectangle');
rectangle.addEventListener('mousedown', function (event) {
  console.log('clientX: ', event.clientX, 'clientY: ', event.clientY); //From the client's perspective
  console.log('pageX: ', event.pageX, 'clientY: ', event.pageY); //From the page's perspective
});

//===================================================================
//Circle follow the mouse point
//===================================================================
let circle = document.querySelector('.circle');

document.addEventListener('mousemove', function (event) {
  circle.style.left = event.clientX - 25 + 'px';
  circle.style.top = event.clientY - 25 + 'px';
});

//===================================================================
//Drawing :)
//===================================================================
// let body = document.querySelector('body');

// body.addEventListener('mousemove', function (event) {
//   let div = document.createElement('div');
//   div.classList.add('draw');
//   div.style.left = event.clientX + 'px';
//   div.style.top = event.clientY + 'px';
//   body.appendChild(div);
// });

//===================================================================
//Mouse Event Test
//===================================================================
// rectangle.addEventListener('mousedown', function (event) {
//   console.log('mousedown');
// });
rectangle.addEventListener('mousedown', function (event) {
  // console.log('mousedown');
  // console.log(event.target);
  console.log(event.target.getBoundingClientRect()); //if you want to know the value of the mouse point
});
// rectangle.addEventListener('mouseenter', function (event) {
//   console.log('mouseenter');
// });
// rectangle.addEventListener('mouseleave', function (event) {
//   console.log('mouseleave');
// });
// rectangle.addEventListener('mousemove', function (event) {
//   console.log('mousemove');
// });
