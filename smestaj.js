var current=document.getElementById('current_two');
var slike=document.getElementsByClassName('thumb_two');

for(var i=0; i<slike.length; i++){
  slike[i].addEventListener('click',display);
}

function display() {
  var sl=this.getAttribute('src');
  current.setAttribute('src',sl);
  

}