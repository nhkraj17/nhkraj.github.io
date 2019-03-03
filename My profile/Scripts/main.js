var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'Images/raj.jpg') {
      myImage.setAttribute ('src','Images/raj2.jpg');
    } else {
      myImage.setAttribute ('src','Images/raj.jpg');
    }
}
var myButton=document.querySelector('#user')
var myHeading=document.querySelector('h1')

function setUserName(){
  var myName=prompt('ENTER YOUR NAME');
  myHeading.textContent='NOOR HAMID KHAN RAJ '+myName;
}
if(!localStorage.getItem('name')){
  setUserName();
}else{
  var storedName=localStorage.getItem('name');
  myHeading.textContent='NOOR HAMID KHAN RAJ '+storedName;
}
myButton.onclick=function(){
  setUserName();
}