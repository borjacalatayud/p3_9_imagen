let img;
var b_g= document. getElementById ("bg");
function setup() {
  let canvas = createCanvas(400, 500);
  canvas.parent("canvasWrapper");
  background(0);

  let uploadElement = document.getElementById("imageUpload");
  uploadElement.addEventListener("change", handleImageUpload);
}

function handleImageUpload(event) {
  let file = event.target.files[0];
  if (file) {
    let reader = new FileReader();
    reader.onload = function (e) {
      img = loadImage(e.target.result);
    };
    reader.readAsDataURL(file);
  }
}

function draw() {
  /*if (b_g.checked){
  background(0);
  } */
  if (img != null) {
    push();
    translate(mouseX, mouseY);
    image(img, -25, -25, 50, 50);
    //image(img, 0, 0, width, height);
    pop();
  }
}
function saveImg(){
saveCanvas (canvas);
}
function keyPressed(){
if(key === "x"){
background(random (255));
}
}