var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
context.fillStyle = "rgb(13,118,208)";
context.fillRect(30, 30, 150, 150);
context.strokeStyle = 'blue';
context.strokeRect(35, 35, 150, 150);


var startPoint = (Math.PI/180)*0;
var endPoint = (Math.PI/180)*360;
context.beginPath();
context.arc(200, 200, 100, startPoint, endPoint, true);
context.fillStyle = "rgba(155, 0, 0, 0.5)";
context.fill();
context.strokeStyle = "rgb(255, 0, 0)";
context.stroke();

context.beginPath();
context.moveTo(0,0);
context.lineTo(60,60);
context.strokeStyle = "black";
context.linewidth = 15;
context.stroke();

context.beginPath();    
context.moveTo(20, 30);
context.lineTo(350, 100);
context.lineTo(250, 400);
context.fillStyle = "rgba(0, 0, 155, 0.5)";
context.fill();