const template = document.createElement('template');
template.innerHTML = `
  <style>
  </style>
  <div>lobby</div>
  <button onclick="location.pathname = '/game'">game</button>
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
