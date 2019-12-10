const template = document.createElement('template');
template.innerHTML = `
  <style>
    background-canvas {
      position: absolute;
      top: 0;
      left: 0;
      background-color: black;
    }   
    lobby-panel-item {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  </style>
  <background-canvas></background-canvas>
  <lobby-panel-item></lobby-panel-item>
`;

export default class Lobby extends HTMLElement {
  static get observedAttributes() {
    return [];
  }

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('lobby-page', Lobby);
