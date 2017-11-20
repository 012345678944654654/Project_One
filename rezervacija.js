var Images=['https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?h=350&auto=compress&cs=tinysrgb','https://images.pexels.com/photos/357547/pexels-photo-357547.jpeg?h=350&auto=compress&cs=tinysrgb' ];

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