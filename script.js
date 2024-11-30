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
ctx.strokeStyle = '#000'; // Color
ctx.fillStyle = '#000423';
ctx.fill();
ctx.stroke();










ctx.beginPath();
ctx.arc(300, 300, 10, 0, Math.PI * 2, false);
ctx.fillStyle = '#001aef'; // Color
ctx.strokeStyle = 'transparent';
// Set shadow properties
// ctx.shadowOffsetX = 0;    // Horizontal shadow offset
// ctx.shadowOffsetY = 2;    // Vertical shadow offset
// ctx.shadowBlur = 10;       // Shadow blur radius
// ctx.shadowColor = "white"; 
ctx.fill();
ctx.stroke();


let download = document.getElementById('download');
download.href = canvas.toDataURL();


// function rotateSecond() {
    
//     ctx.translate(300, 300);
//     ctx.rotate(Math.PI *6/180 );
//     ctx.translate(-300, -300);
    
//     ctx.beginPath();
//     ctx.moveTo(300, 300);
//     ctx.lineTo(300, 100);
//     ctx.strokeStyle = '#000f89';
//     ctx.fill();
//     ctx.stroke();
// }
function rotateMinute() {
    
    ctx.beginPath();
    
    
    ctx.translate(300, 300);
    ctx.rotate(Math.PI /1800 );
    ctx.translate(-300, -300);
    ctx.moveTo(300, 300);
    ctx.lineTo(100, 300);
    ctx.strokeStyle = '#0015bc';
    ctx.fill();
    ctx.stroke();
    
        
}

// setInterval(() => {
//     rotateSecond();
    
// }, 1000);

setInterval(rotateMinute, 1); // Call the function every second