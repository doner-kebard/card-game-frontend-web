export default {
  minDist: 10,
  maxDist: 30,
  initialWidth: 10,
  maxLines: 100,
  initialLines: 4,
  speed: 5,

  lines: [],
  frame: 0,
  timeSinceLast: 0,

  dirs: [
    // straight x, y velocity
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
    // diagonals, 0.7 = sin(PI/4) = cos(PI/4)
    [.7, .7],
    [.7, -.7],
    [-.7, .7],
    [-.7, -.7]
  ],
  getColor(x, w) {
    return 'hsl( hue, 80%, 50% )'.replace(
      'hue', String(x / w * 360 + this.frame)
    );
  }

};
