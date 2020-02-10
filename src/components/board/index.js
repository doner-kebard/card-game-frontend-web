const template = document.createElement('template');
template.innerHTML = `
  <style>
    .board {
      border-style: solid;
    }
  </style>
  <div class="board">
    <row-card></row-card>  
    <row-card></row-card>  
    <row-card></row-card>  
    <row-card></row-card>  
    <row-card></row-card>  
  </div>
`;

export default class Board extends HTMLElement {
  static get observedAttributes() {
    return [];
  }

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('board-game', Board);
