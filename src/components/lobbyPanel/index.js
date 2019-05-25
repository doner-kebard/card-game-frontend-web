const template = document.createElement('template');
template.innerHTML = `
  <style>
  </style>
  <div>lobbyPanel</div>
`;

export default class LobbyPanel extends HTMLElement {
  static get observedAttributes() {
    return [];
  }

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('lobby-panel-item', LobbyPanel);
