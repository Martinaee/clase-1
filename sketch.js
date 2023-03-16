function setup() {
  createCanvas(windowWidth, windowHeight).position(0,0).style("z-index",-1);
  createA("https://github.com/Martinaee","perrito","_blank").id("miau");
  textSize(40)

}

function draw() {
  text("🐕", mouseX, mouseY)
} 