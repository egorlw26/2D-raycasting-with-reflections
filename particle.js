class Particle
{
    constructor()
    {
        this.pos = createVector(width/2, height/2);
        this.rays = [];

        for(let angle = 0; angle < 360; angle+=10)
        {
            this.rays.push(new Ray(this.pos.x, this.pos.y, 
                Math.cos(radians(angle)), Math.sin(radians(angle))));
        }
    }

    show()
    {
        stroke(255);
        ellipse(this.pos.x, this.pos.y, 5, 5);
        for(let ray of this.rays)
            ray.show();
    }

    followMouse()
    {
        this.pos.set(mouseX, mouseY);
    }
}