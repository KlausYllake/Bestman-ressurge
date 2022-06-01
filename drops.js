class Drops {
    constructor(x,y) {
        var options = {
            friction: 0.01,
            restitution: 0.1
        }
        this.rain = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world, this.rain);
    }
    update() {
        if (this.rain.position.y > height) {
            Matter.Body.setPosition(this.rain,{x: random(0,400), y: 0});
        }
    }
    display() {
        var position = this.rain.position;
        fill("cyan");
        ellipseMode(RADIUS);
        ellipse(position.x,position.y,this.radius);
    }
}