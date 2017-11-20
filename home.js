var Images=['https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?h=350&auto=compress&cs=tinysrgb','https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?h=350&auto=compress&cs=tinysrgb' ];

var step=1;
function gallery(){
  document.getElementById('Imgs').src=Images[step];
  if(step<Images.length-1){
  step++;
} else  {
  step=0;
  }
}

window.onload=setInterval(gallery, 2500);