var Images=['https://images.pexels.com/photos/225232/pexels-photo-225232.jpeg?h=350&auto=compress&cs=tinysrgb ', 'https://images.pexels.com/photos/5329/person-woman-apple-hotel.jpg?h=350&auto=compress&cs=tinysrgb ' ];

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