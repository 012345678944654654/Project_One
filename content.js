var Images=['https://images.pexels.com/photos/346808/pexels-photo-346808.jpeg?h=350&auto=compress&cs=tinysrgb','https://images.pexels.com/photos/302428/pexels-photo-302428.jpeg?h=350&auto=compress&cs=tinysrgb' ];

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