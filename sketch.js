let l;
let p;

function setup()
{
    createCanvas(400, 400);
    l = new Segment(300, 100, 300, 300);
    p = new Particle();
}

function draw()
{
    background(0);
    l.show();
    p.show();
    p.followMouse();

    for(let ray of p.rays)
    {
        let pt = ray.intersectSegment(l);
        if(pt != null)
            ray.stretchTo(pt.x, pt.y);
    }
}