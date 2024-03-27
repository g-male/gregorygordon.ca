// ON OFF SWITCH 

// ON OFF SWITCH TOGGLE. 4 clicks = 2 changes
let clickState = 0;

function doAction() {
    clickState++; 
    
  const imagerotate = document.getElementById('select-images');

const fullsite = document.getElementById('fullsite');
const switchrow = document.getElementById('mid')
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
  switchrow.style.background = 'radial-gradient(2px 2px, white, blue)';
  switchrow.style.backgroundSize = '4px 4px';
    } else if (clickState == 2 ) {
      //off state
  console.log(clickState)
  imagerotate.style.display = 'none';
  fullsite.style.display = 'block';
  switchrow.style.background = '';
  
  clickState=0;
    } 

}




//IMAGE ROTATE
const grillgif = 'https://d2w9rnfcy7mm78.cloudfront.net/9316648/original_ef5dd79869cfddf488d79074c07bd39a.gif?1604049771?bc=';
const patoispoetry = 'https://d2w9rnfcy7mm78.cloudfront.net/14879304/original_253b58a11b65cff4743f2d9192792936.png?1643211120?bc=0';
const computertech = 'https://d2w9rnfcy7mm78.cloudfront.net/25891771/original_c344ccef201ec33aedf31a303641889e.png?1706057851?bc=0';
const soccerislife = 'https://d2w9rnfcy7mm78.cloudfront.net/25891759/original_95ad6e1f6d66beb8e986284786736361.png?1706057739?bc=0';
const perucpu = 'https://d2w9rnfcy7mm78.cloudfront.net/2431845/original_ec41d301f8297ade9e025698991545ac.gif?1531610084?bc=1';
const jellycircle = 'https://d2w9rnfcy7mm78.cloudfront.net/3843653/original_a73d0fa927a1840c56710258aa815ab6.gif?1552363492?bc=1';
const princejumper = 'https://d2w9rnfcy7mm78.cloudfront.net/25891801/original_d77fe59ece85255585278cf84d5de746.png?1706058010?bc=0';
const whoami = 'https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI3NjM5ODgyL29yaWdpbmFsX2IyYTU4MWMxZDEyMTM1ZDNhZTEzMjM5ODgxMzU3MGQ2LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTIwMCwiaGVpZ2h0IjoxMjAwLCJmaXQiOiJpbnNpZGUiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOnRydWV9LCJ3ZWJwIjp7InF1YWxpdHkiOjg1fSwiZmxhdHRlbiI6eyJiYWNrZ3JvdW5kIjp7InIiOjIwMywiZyI6MjAzLCJiIjoyMDN9fSwianBlZyI6eyJxdWFsaXR5Ijo4NX0sInJvdGF0ZSI6bnVsbH19';

const barcavsreal = 'https://d2w9rnfcy7mm78.cloudfront.net/25891769/original_e99bfe9b1631dc33153f579f99f834d4.jpg?1706057837?bc=0';
let images = [grillgif, computertech, patoispoetry, soccerislife, perucpu, jellycircle, princejumper, whoami, barcavsreal ];

let image = document.getElementById('image-rotate');


setInterval(function(){
  let random = Math.floor(Math.random() * 9);
  image.src = images[random];
},
2500)


// GET TIME AND DATE 
