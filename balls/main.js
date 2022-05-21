const canvas = document.getElementById("game-window");
const ctx = canvas.getContext('2d');

canvas.height = 600;
canvas.width = 600;

const Balls = [];

for(let i = 0 ;i<100; i++){
    Balls[i] = new Ball();
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let i = 0 ;i<100;i++)
    {
        Balls[i].Phy();
    }
    requestAnimationFrame(animate);
}

animate();

