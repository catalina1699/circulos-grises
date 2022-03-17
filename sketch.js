var button

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(random(0,255), random(0,255), random(0,255));
    button = createButton('guardar imagen');
  button.position(500, 500);
  button.mousePressed(salvar)
  frameRate (10)
 
}

function draw() {
  fill(random(0,255))
  circle(mouseX, mouseY, 40);
describe('black circle with white outline in mid of gray canvas')

}

function salvar (){
  saveCanvas ("imagen","jpg")
}
