import properties from './properties.js';

export default class Line {
  constructor(parent, ctx) {
    this.ctx = ctx || parent.ctx;
    this.x = parent.x | 0;
    this.y = parent.y | 0;
    this.width = parent.width / 1.25;

    do {

      var dir = properties.dirs[(Math.random() * properties.dirs.length) | 0];
      this.vx = dir[0];
      this.vy = dir[1];

    } while (
      (this.vx === -parent.vx && this.vy === -parent.vy) || (this.vx === parent.vx && this.vy === parent.vy));

    this.vx *= properties.speed;
    this.vy *= properties.speed;

    this.dist = (Math.random() * (properties.maxDist - properties.minDist) + properties.minDist);

  }

  step() {

    var dead = false;

    var prevX = this.x,
      prevY = this.y;

    this.x += this.vx;
    this.y += this.vy;

    --this.dist;

    // kill if out of screen
    if (this.x < 0 || this.x > window.innerWidth || this.y < 0 || this.y > window.innerHeight)
      dead = true;

    // make children :D
    if (this.dist <= 0 && this.width > 1) {

      // keep yo self, sometimes
      this.dist = Math.random() * (properties.maxDist - properties.minDist) + properties.minDist;

      // add 2 children
      if (properties.lines.length < properties.maxLines) properties.lines.push(new Line(this));
      if (properties.lines.length < properties.maxLines && Math.random() < .5) properties.lines.push(new Line(this));

      // kill the poor thing
      if (Math.random() < .2) dead = true;
    }

    this.ctx.strokeStyle = this.ctx.shadowColor = properties.getColor(this.x, window.innerWidth);
    this.ctx.beginPath();
    this.ctx.lineWidth = this.width;
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(prevX, prevY);
    this.ctx.stroke();

    if (dead) return true;
  };
}
