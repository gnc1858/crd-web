const canvas = document.getElementById('cardioid');
const ctx = canvas.getContext('2d');

const  w = canvas.width;
const  h = canvas.height ;
let lines = 100 //number of lines
let r;//radius
let variant = 0;

function init() {
    r = w/2 -40;
    ctx.translate(w/2,h/2)
    render();
}

function render() {

    //Clear canvas
    ctx.fillStyle = "black";
    ctx.fillRect(-w /2, -h / 2, w, h);
    ctx.lineWidth = '0.8';


    for (let i = 0; i < lines; i++) {
        //angles determining first and second point 
        var angle = 2 * Math.PI /lines*i + Math.PI ;
        var angle2 = 2 * Math.PI / lines * ((variant*i)%lines) + Math.PI;

        //Coordinates of first(x,y) and second(x2,y2) point on 
        var x = r * Math.cos(angle);
        var y = r * Math.sin(angle);
        var x2 = r * Math.cos(angle2);
        var y2 = r * Math.sin(angle2);

        //draw line via connecting coordinates of points
        ctx.beginPath();
        ctx.strokeStyle = "rgba(108, 55, 216, 0.8)";
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
    }

    window.requestAnimationFrame(render);
    variant += 0.01;

}


export {init}