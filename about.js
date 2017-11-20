var Images=[' https://images.pexels.com/photos/635041/pexels-photo-635041.jpeg?h=350&auto=compress&cs=tinysrgb  ', 'https://images.pexels.com/photos/53577/hotel-architectural-tourism-travel-53577.jpeg?w=940&h=650&auto=compress&cs=tinysrgb '];

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