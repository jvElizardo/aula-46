var cowboy,edges,indio,bandido;
var cowboyImg,indioImg,bandidoImg;
var botao,botaoinimigo;
var codigo=[];
var sequencia;
var soloinvisivel;
var fundoIMG;
var nuvem,imgceu;
var solo ;
var randomn;
var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6;
var pontos=0;
var obstaculogroup
var nuvemgroup
var inicio = 1 
var fim = 0 
var estado_de_jogo=inicio
// carrega as animaçoes 
function preload()
{

 fundoIMG=loadImage("th.jpg");
cowboyImg=loadImage("teste.png");
indioImg=loadImage("teste3.png");
bandidoImg=loadImage("teste2.png");

}

function setup(){
  createCanvas(windowWidth,windowHeight);
  
  //criando o trex
 /* trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  solo=createSprite(300,180,60,20);
  solo.addAnimation("terra",groundImage);
  edges = createEdgeSprites();
  soloinvisivel=createSprite(40,200,300,20);
  soloinvisivel.visible=false;
  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50;
  console.log("qwfcxvcg"+7);
  obstaculogroup=new Group ();
  nuvemgroup= new Group ();
  */
  cowboy = createSprite(width/4,height-80,10,30);
  cowboy.addImage(cowboyImg);
  indio = createSprite(width/2,height-150,10,10);
  indio.addImage(indioImg);
  edges=createEdgeSprites();
  bandido=createSprite(width-100,height-60,10,20);
  bandido.addImage(bandidoImg);
  botao=createImg("botao.png");
  botao.position(width/3,height-150);
  botao.size(60,60);
  botaoinimigo=createImg("botao.png");
  botaoinimigo.position(width-250,height-150);
  botaoinimigo.size(60,60);
}
function numeros(){
  for(var i = 0;i<26;i++){
  
    sequencia=Math.round(random(1,90));
    codigo.push(sequencia)
    setTimeout(()=>{
      textSize(60);
    fill("black")
  text(codigo[i],width/2,height/2)
    },1000);
  
}

}

function draw(){
  //definir a cor do plano de fundo 
  background(fundoIMG); 
  numeros();
 /* text("pontos"+pontos,50,20);
  
  if (estado_de_jogo===inicio)
  { 
    solo.velocityX=-6;
    pontos=pontos+Math.round(frameCount/60);
    if (solo.x<0){
      solo.x=solo.width/2;
    }
    if(keyDown("space")&& trex.y>=150 )
  {
    trex.velocityY = -10; 
  }
  trex.velocityY = trex.velocityY + 0.5;
  ceu();
  obstaculogroup();
  if (trex.isTouching(obstaculogroup)){
    estado_de_jogo=fim;
  }
}

  else if (estado_de_jogo===fim){
    solo.velocityX=0;
   obstaculogroup.setVelocityXEach(0)
   nuvemgroup.setVelocityXEach(0)
  }
  
  //registrando a posição y do trex
  //console.log(trex.y);
  
  //pular quando tecla de espaço for pressionada
  
  
//console.log(frameCount);
 
  
 //impedir que o trex caia
  trex.collide(soloinvisivel);
 */
  if(keyDown("d")){
    cowboy.x+=10;
  }
  if(keyDown("a")){
    cowboy.x-=10;
  }
  drawSprites(); 
  
}

function ceu ()
{
  if (frameCount%100===0)
  {
   
 nuvem=createSprite(400,20,60,20);
 nuvem.addImage(imgceu);
 nuvem.velocityX=-3;
 console.log(trex.depth);
console.log(nuvem.depth);
nuvem.y=Math.round(random(30,60));
nuvem.depth=trex.depth;
trex.depth+=1;
nuvem.lifetime=40;
nuvemgroup.add(nuvem);
}

}
function obstaculos ()
{
  if(frameCount%50===0)
{
  cacto=createSprite(400,180,20,25);
  cacto.scale=0.5;
  cacto.velocityX=-6;
  randomn=Math.round(random(1,6));
  cacto.lifetime=80;
  switch(randomn)
  {
   case 1: cacto.addImage(obstacle1);
            break;
   case 2: cacto.addImage(obstacle2);
           break
   case 3: cacto.addImage(obstacle3);
           break;
  case 4: cacto.addImage(obstacle4);
           break; 
  case 5: cacto.addImage(obstacle5);
           break; 
    case 6: cacto.addImage(obstacle6);
           break;
    default:break;                
  }
  obstaculogroup.add(cacto);
}

}