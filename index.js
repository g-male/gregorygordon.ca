// ON OFF SWITCH 

// ON OFF SWITCH TOGGLE. 4 clicks = 2 changes
let clickState = 0;

function doAction() {
    clickState++; 
    
  const imagerotate = document.getElementById('select-images');

const fullsite = document.getElementById('fullsite');

//setting back to regular off state
    if (clickState ==0){
     console.log(clickState)
    fullsite.style.display = 'block';
    }
//on state:showing image rotate
    else if (clickState ==1 ) {
  console.log(clickState)
  imagerotate.style.display = 'block';
  fullsite.style.display = 'none';
    } else if (clickState == 2 ) {
      //off state
  console.log(clickState)
  imagerotate.style.display = 'none';
  fullsite.style.display = 'block';
  clickState=0;
    } 

}




//IMAGE ROTATE
let images = ['/images/cotty-6.jpg', '/images/friendshipandsoccer.png', '/images/barca_vs_real.jpg', '/images/liberation_of_aunt_Jemima.JPG', '/images/web-off.jpg', '/images/notting-hill-carni-1992.jpg', '/images/understand-computer.png', '/images/kobe-smile.jpg', '/images/mike-janet.jpg', '/images/prince_jumper.png'];

let image = document.getElementById('image-rotate');

setInterval(function(){
  let random = Math.floor(Math.random() * 10);
  image.src = images[random];
},
1500)


// GET TIME AND DATE 
