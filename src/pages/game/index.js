const template = document.createElement('template');
template.innerHTML = `
  <style>
  </style>
  <div class="game">
    <div class="score"></div>
    <div class="boards">
      <board-game></board-game>
      <board-game></board-game>    
    </div>
    <row-card></row-card>
  </div>
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
