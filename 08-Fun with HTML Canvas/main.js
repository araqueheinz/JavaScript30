const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = 'black';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.globalCompositeOperation = 'overlay';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
   if(!isDrawing) return // 
   ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
   ctx.beginPath();
   // Starts From
   ctx.moveTo(lastX, lastY);
   // Go To
   ctx.lineTo(e.offsetX, e.offsetY);
   ctx.stroke();
   // Destructuring
   [lastX, lastY] = [e.offsetX, e.offsetY];
   hue++;
   if(hue >= 360){
    hue = 0;
   }
   if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
        direction = !direction;
   }
   direction ? ctx.lineWidth++ : ctx.lineWidth--
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (event) => {
    [lastX, lastY] = [event.offsetX, event.offsetY]
    isDrawing = true;
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false)