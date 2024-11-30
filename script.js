let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// ctx.beginPath();
// ctx.strokeStyle = 'red';
// ctx.moveTo(0, 0);
// ctx.lineTo(60, 0);
// ctx.lineTo(60, 60);
// ctx.lineTo(0, 60);
// ctx.lineTo(0, 0);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(150, 150, 50, 0, Math.PI *3/2 , false); // Full circle
// ctx.fillStyle = 'yellow';
// ctx.fill();
// ctx.lineWidth = 3;
// ctx.strokeStyle = 'red';

// ctx.stroke();
// ctx.beginPath();
// ctx.ellipse(200, 150, 100, 50, Math.PI / 4, 0, Math.PI * 2);
// ctx.fillStyle = 'purple';
// ctx.fill();
// ctx.strokeStyle = 'black';
// ctx.stroke();
// ctx.beginPath();
// ctx.ellipse(200, 150, 100, 50, Math.PI / 4, 0, Math.PI * 2);
// ctx.fillStyle = 'purple';
// ctx.fill();
// ctx.strokeStyle = 'black';
// ctx.stroke();

// // Quadratic curve
// ctx.beginPath();
// ctx.moveTo(50, 150);               // Starting point
// ctx.quadraticCurveTo(150, 50, 250, 150); // Control point and endpoint
// ctx.strokeStyle = 'pink';
// ctx.stroke();



// ctx.beginPath();
// ctx.ellipse(300,300, 100,150, Math.PI *0, 0, Math.PI * 1 ,true);
// ctx.fillStyle = 'red';
// ctx.fill();
// ctx.stroke();
ctx.lineWidth = 5;


ctx.beginPath();
ctx.arc(300, 300, 275, 0, Math.PI * 2, false);
ctx.strokeStyle = 'lime'; // Color
ctx.fill();
ctx.stroke();





    ctx.beginPath();
    ctx.moveTo(300, 300);
    ctx.lineTo(300, 100);
    ctx.strokeStyle = 'cyan';
    ctx.fill();
    ctx.stroke();
    
    ctx.beginPath();
    
    ctx.moveTo(300, 300);
    ctx.lineTo(100, 300);
    ctx.strokeStyle = 'red';
    ctx.fill();
    ctx.stroke();





ctx.beginPath();
ctx.arc(300, 300, 10, 0, Math.PI * 2, false);
ctx.fillStyle = 'white'; // Color
ctx.strokeStyle = 'transparent';
ctx.fill();
ctx.stroke();


let download = document.getElementById('download');
download.href = canvas.toDataURL();



