img = ""
objects = [];
status = "";

function preload() {
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detectando Objetos"
}

function modelLoaded() {
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error)
    };
    console.log(results);
}

function draw() {
    image(img, 0, 0, 640, 420);

    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 350, 350);

    fill("#00FF00");
    text("cat", 310, 75);
    noFill();
    stroke("#00FF00");
    rect(300, 60, 300, 350);
}

