let p;
let testRay;
let segments;
let angleIncreaseStepSlider;
let numberOfReflectionsSlider;

function setup()
{
    angleIncreaseStepSlider = createSlider(1, 21, 17, 2);
    angleIncreaseStepSlider.position(20, 20);
    angleIncreaseStepSlider.style('width', '120px');
    segments = [];
    
    createCanvas(400, 400);
    addBorders();


    for(let i = 0; i < 1; ++i)
    {
        const x1 = 50 + Math.random() * width;
        const y1 = 50 + Math.random() * height;
        const x2 = 50 + Math.random() * width;
        const y2 = 50 + Math.random() * height;

        segments.push(new Segment(x1, y1, x2, y2));
    }

    testRay = new Ray(createVector(100, 200), 1, 0);
    // p = new Particle(angleIncreaseStepSlider.value());
}

function draw()
{
    background(0);
    testRay.show();
    testRay.lookAt(mouseX, mouseY);
    
    let tuple = testRay.nearestSegment(segments); 
    let pt = tuple[0];
    testRay.stretchTo(pt.x, pt.y); 

    let reflRays = testRay.calculateReflections(segments, 10);
    for(let ray of reflRays)
    {
        ray.show();
    }

    for(let segment of segments)
        segment.show();

    // p.show();
    // p.followMouse();
    // let step = angleIncreaseStepSlider.value();
    // p.updateIncreaseStep(step);
    // p.rayCasting(segments);
}

function keyPressed()
{
    if(keyCode === LEFT_ARROW)
    {
        p.rotate(-10);
    }
    if(keyCode === RIGHT_ARROW)
    {
        p.rotate(10);
    }
}

function addBorders()
{
    segments.push(new Segment(0, 0, width, 0));
    segments.push(new Segment(0, 0, 0, height));
    segments.push(new Segment(width, height, width, 0));
    segments.push(new Segment(width, height, 0, height));
}