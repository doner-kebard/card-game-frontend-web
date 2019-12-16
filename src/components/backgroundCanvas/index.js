import properties from './properties.js';
import Line from './line.js';

const template = document.createElement('template');
template.innerHTML = `
  <style> 
    canvas {
      display: block;
    }
  </style>
  <canvas id=c></canvas>
`;

export default class BackgroundCanvas extends HTMLElement {
  static get observedAttributes() {
    return [];
  }

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.c = this._shadowRoot.getElementById('c');

    this.w = this.c.width = window.innerWidth;
    this.h = this.c.height = window.innerHeight;
    this.ctx = this.c.getContext('2d');

    this.starter = { // starting parent line, just a pseudo line
      x: this.w / 2,
      y: this.h / 2,
      vx: 0,
      vy: 0,
      width: properties.initialWidth
    };
  }

  connectedCallback() {
    this.init();
    this.anim();

    window.addEventListener('resize', this.resizeHandler.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.resizeHandler.bind(this));
  }

  resizeHandler() {
    this.w = this.c.width = window.innerWidth;
    this.h = this.c.height = window.innerHeight;
    this.starter.x = this.w / 2;
    this.starter.y = this.h / 2;

    this.init();
  }

  init() {
    properties.lines.length = 0;

    for (var i = 0; i < properties.initialLines; ++i)
      properties.lines.push(new Line(this.starter, this.ctx));

    this.ctx.fillStyle = '#222';
    this.ctx.fillRect(0, 0, this.w, this.h);

    // if you want a cookie ;)
     this.ctx.lineCap = 'round';
  }

  anim() {
    window.requestAnimationFrame(this.anim.bind(this));

    ++properties.frame;

    this.ctx.shadowBlur = 0;
    this.ctx.fillStyle = 'rgba(0,0,0,.02)';
    this.ctx.fillRect(0, 0, this.w, this.h);
    this.ctx.shadowBlur = .5;

    for (var i = 0; i < properties.lines.length; ++i)

      if (properties.lines[i].step()) { // if true it's dead

        properties.lines.splice(i, 1);
        --i;

      }

    // spawn new

    ++properties.timeSinceLast;

    if (properties.lines.length < properties.maxLines && properties.timeSinceLast > 10 && Math.random() < .5) {

      properties.timeSinceLast = 0;

      properties.lines.push(new Line(this.starter, this.ctx));

      // cover the middle;
      this.ctx.fillStyle = this.ctx.shadowColor = properties.getColor(this.starter.x);
      this.ctx.beginPath();
      this.ctx.arc(this.starter.x, this.starter.y, this.initialWidth, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }
}

window.customElements.define('background-canvas', BackgroundCanvas);
