class Ball{
    constructor(){
        this.posX = Math.random() * canvas.width;
        this.posY = Math.random() * canvas.height;

        this.velocity = {x:(Math.random()*2-1)*3,y:3};
        this.Gravity = (Math.random()*2-1)*5;
        
        console.log(this.posX);
        console.log(this.posY)
    }
    
    Draw(){
        ctx.fillStyle =`rgb(${Math.random() * 255 },${Math.random() * 255 },${Math.random() * 255 })`;
        ctx.beginPath();
        ctx.arc(this.posX,this.posY, 6, 0, 2 * Math.PI, false);
        ctx.stroke();
        ctx.fill();

    }

    Phy(){
        this.Draw();
                
        if(this.posY<0){
            this.velocity.y = 3;
        }
        
        if(this.posY>canvas.height){
            this.velocity.y = -this.velocity.y;
        }
        if(this.posX>canvas.width){
            this.velocity.x = -this.velocity.x;
        }
        
        if(this.posX<0){
            this.velocity.x = -this.velocity.x;
        }
        this.posY = this.posY + this.velocity.y;
        this.posX = this.posX + this.velocity.x
    }

}