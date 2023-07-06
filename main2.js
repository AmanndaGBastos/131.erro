//possibilidades de código  
img=""
status=""
var objetos =[]
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
    if(status!=""){//!= significa diferente
      for(i=0;i<objetos.length;i++){
        document.getElementById("status").innerHTML="Status: Personagem Detectado";
        fill("#8d03ff")
        var porcentagem = floor(objetos[i].confidence * 100)
        Text(objetos[i].label + " " + porcentagem + "%", objetos[i].x + 15, objetos[i].y + 15)
        nofill()
        stroke("#8d03ff")
        rect(objetos[i].x, objetos[i].y,
             objetos[i].width,
             objetos[i].height)
      }  
    }
    
  }
  function gotResults(error, results){
    if (error) {
      console.log(error)
    }  
      console.log(results)
    objetos=results
  }
  