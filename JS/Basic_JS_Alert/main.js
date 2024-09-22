//------------------------------------------------------------------------------------
//Selector
//------------------------------------------------------------------------------------

//Get the HTML element with the ID hello from the web document. Set the inner text to 'hi!'
document.getElementById('hello').innerHTML = 'Hello!';
//document.getElementById('???').??? = '??';
//if you want to change the content=> .innerHTML
//f you want to change the css=> .style.color or some tag(margin,padding...ETC)
// "=" means assignment; it means 'put what's on the right into the left.
//All characters should be inside quotation marks.
document.getElementById('hi').innerHTML = 'nice to meet you!';
//document.getElementById('hi') is called a selector

document.getElementById('hello').style.fontSize = '30px';
document.getElementById('hello').style.fontWeight = 200;

//------------------------------------------------------------------------------------
//Alert1
//tip : ctrl + ? == // (single comment)
//      alt + shift + A == /*  */ (all comment)
//Alert
//------------------------------------------------------------------------------------
let blue = document.getElementById('alert-box-blue');
let red = document.getElementById('alert-box-red');
let yellow = document.getElementById('alert-box-yellow');

/*function name(parameter){ 
  statement = parameter };
  
  Strength of parameter: Execute multiple functions with a single function!!
  Multiple parameters are allowed. (parameter, parameter2, parameter)
  functionName = '1', '2', '3'*/

function alertBlue(A) {
  blue.style.display = A;
}
function alertRed(A) {
  red.style.display = A;
}
function alertYellow(A) {
  yellow.style.display = A;
}

//------------------------------------------------------------------------------------
//Alert2 - Using parameter!
//------------------------------------------------------------------------------------
let openClose1 = document.getElementById('alert1');
let alertMsg1 = document.getElementById('alert-msg1');

function alert1(msg) {
  openClose1.style.display = 'block';
  alertMsg1.innerHTML = msg;
}

//------------------------------------------------------------------------------------
//EventListener
//------------------------------------------------------------------------------------
//When the element with id=close is clicked, execute the code inside the {}.
let openClose2 = document.getElementById('alert2');
let alertMsg2 = document.getElementById('alert-msg2');

document.getElementById('close').addEventListener('click', function alert2() {
  openClose2.style.display = 'none';
});
document
  .getElementById('check_id')
  .addEventListener('click', function alert2() {
    openClose2.style.display = 'block';
    alertMsg2.innerHTML = 'Please Enter the ID';
  });
document
  .getElementById('check_pw')
  .addEventListener('click', function alert2() {
    openClose2.style.display = 'block';
    alertMsg2.innerHTML = 'Please Enter the PW';
  });

//------------------------------------------------------------------------------------
//JQuery
//------------------------------------------------------------------------------------
$('#test').html('안녕');
//document.getElementById and $ have the same meaning in JQuery
//To find a class, use $('.test1')
$('#test2').html();
$('#test3').html('Color change');
$('#test3').css('color', 'pink'); //두개 들어감
//"Attribute => attr.
//When you're not sure what to put, just use attr for the property."
$('#test5').attr('class', 'yellow-bg');
