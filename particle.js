class Particle
{
    constructor(angleIncreaseStep)
    {
        this.pos = createVector(width/2, height/2);
        this.rays = [];
        this.reflectionPreData = [];
        this.angleIncreaseStep = angleIncreaseStep;
        this.startAngle = 0;

        this.fillRays();       
    }

    updateIncreaseStep(nIncreaseStep)
    {
        if(this.angleIncreaseStep != nIncreaseStep)
        {
            this.angleIncreaseStep = nIncreaseStep;
            this.fillRays();
        }
        
    }

    rotate(angle)
    {
        this.startAngle += angle;
    }

    fillRays()
    {
        this.rays = [];
        for(let angle = this.startAngle; angle <= this.startAngle + 45; angle += this.angleIncreaseStep)
        {
            this.rays.push(new Ray(this.pos, 
                Math.cos(radians(angle)), Math.sin(radians(angle))));
        }
    }

    rayCasting(segments)
    {
        for(let ray of this.rays)
        {
            let tuple = ray.nearestSegment(segments); 
            let pt = tuple[0];            
            if(pt != null)
            {
                ray.stretchTo(pt.x, pt.y);
                
                let intersectedSegment = tuple[1];
                let nRay = new Ray(pt, ray.dir.x, ray.dir.y);
                this.reflectionPreData.push([nRay, intersectedSegment]);
            }
        }
    }

    show()
    {
        stroke(255);
        ellipse(this.pos.x, this.pos.y, 0, 0);
        this.fillRays();
        for(let ray of this.rays)
            ray.show();
    }

    followMouse()
    {
        this.pos.set(mouseX, mouseY);
    }
}