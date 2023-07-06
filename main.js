//possibilidades de código 1 
img=""
status=""

function preload(){
    img = loadImage('R (2).jpg');
  }
  

  
  function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
     objectDetector=ml5.objectDetector("cocossd",modelLoaded);//importando a biblioteca
     document.getElementById("status").innerHTML="Status: Detectando Personagens"
     
  }
  
  function modelLoaded(){
    console.log("modelo carregado")
    status=false
    objectDetector.detect(img,gotResults);//utilizando a função da biblioteca importada da linha 13
  }
  
  function draw() {
    image(img, 0, 0, 600, 500);
    fill(255, 255 , 0);
    text("Max", 45, 75);
    noFill();
    stroke(255, 255, 0);
    rect(30, 60, 450, 350 );

    fill(255, 0 , 0)  ;
    text("Eleven", 150, 25);
    noFill();
    stroke(255, 0 ,0 )
    rect( 140 ,10 , 450 , 350)
    
  }
  function gotResults(error, results){
    if (error) {
      console.log(error)
    }  
      console.log(results)
    
  }
  