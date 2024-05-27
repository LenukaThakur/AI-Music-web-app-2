peter_pan_song = "";
harry_potter_theme_song = "";
function setup(){
    canvas = createCanvas(450,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 450, 400)
}

function preload(){
    peter_pan_song=loadSound("music2.mp3")
    harry_potter_theme_song=loadSound("music.mp3")
}

function play(){
    sound1.play()
    sound2.play()
}

