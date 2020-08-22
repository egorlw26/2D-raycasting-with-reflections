function rayReflactionOverSegment(ray, seg)
{
    if(ray != null && seg != null)
    {
        let r = ray;
        let s = seg;

        let segDir = p5.Vector.sub(s.b, s.a);
        segDir = segDir.normalize();

        let dotValue = p5.Vector.dot(r.dir, segDir);
        let projectionVector = p5.Vector.sub(p5.Vector.mult(segDir, dotValue), r.dir);
        let nRayDir = p5.Vector.add(r.dir, p5.Vector.mult(projectionVector, 2));

        let nRay = new Ray(r.orig, nRayDir.x, nRayDir.y);

        return nRay;
    }

    return null;
}