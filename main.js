var mouseEvent = "empty";
var lastPositionX, lastPositionY;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
cor = "peachpuff";
largura = 1;

canvas.addEventListener("mousedown",myMousedown);
function myMousedown(e){
cor = document.getElementById("cor").value;
largura = document.getElementById("largura").value;
mouseEvent = "mousedown";
}
canvas.addEventListener("mouseup",myMouseup);
function myMouseup(e){
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave",myMouseleave);
function myMouseleave(e){
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove",myMousemove);
function myMousemove(e){
    PositionMouseX = e.clientX - canvas.offsetLeft;
    PositionMouseY = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = cor;
        ctx.lineWidth = largura;
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + lastPositionX + "y = " + lastPositionY);
        ctx.moveTo(lastPositionX, lastPositionY);
 
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + PositionMouseX + "y = " + PositionMouseY);
        ctx.lineTo(PositionMouseX, PositionMouseY);
        ctx.stroke();
    }
    lastPositionX = PositionMouseX;
    lastPositionY = PositionMouseY;
}
function limpar() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
