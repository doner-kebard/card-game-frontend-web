const template = document.createElement('template');
template.innerHTML = `
  <style>
  </style>
  <div class="title">game</div>
  <button onclick="location.pathname = '/lobby'">go back</button>
`;

export default class Game extends HTMLElement {
  static get observedAttributes() {
    return [];
  }

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('game-page', Game);
