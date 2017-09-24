var script = document.createElement('script');
script.src = 'https://beanhuthost.herokuapp.com/javascripts/pixi.js';
document.head.appendChild(script);

var newImg = document.createElement("img");
newImg.src = "https://beanhuthost.herokuapp.com/images/benis-background.jpg";
document.getElementById("wrap").insertBefore(newImg, document.getElementById("mainpage"));

var beanCanvas = document.createElement("canvas");
beanCanvas.id = "bean-canvas";
beanCanvas.width = 512;
beanCanvas.height = 384;
document.getElementById("wrap").insertBefore(beanCanvas, document.getElementById("mainpage"));




stage = new PIXI.Container();
renderer = PIXI.autoDetectRenderer(
    512,
    384,
    {view:document.getElementById("bean-canvas")}
);
var beanTexture = PIXI.Texture.fromImage("https://beanhuthost.herokuapp.com/images/bean.png");
bean = new PIXI.Sprite(beanTexture);
bean.position.x = 0;
bean.position.y = 0;
stage.addChild(bean);

function update(){
    bean.position.x += 0.128;
    bean.position.y += 0.64;
    renderer.render(stage);
}

requestAnimationFrame(update);