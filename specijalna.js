var Images=['https://images.pexels.com/photos/6289/lights-night-alcohol-party.jpg?h=350&auto=compress&cs=tinysrgb','https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?h=350&auto=compress&cs=tinysrgb'];

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