var screen=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
var last_pos_x,last_pos_y;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
color="black";
width=1;
if(screen<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    last_pos_x=e.touches[0].clientX-canvas.offsetLeft;
    last_pos_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
current_pos_x=e.touches[0].clientX-canvas.offsetLeft;
current_pos_y=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.moveTo(last_pos_x,last_pos_y);
    ctx.lineTo(current_pos_x,current_pos_y);
    ctx.stroke();
last_pos_x=current_pos_x;
last_pos_y=current_pos_y;
}