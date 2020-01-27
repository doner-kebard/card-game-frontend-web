const template = document.createElement('template');
template.innerHTML = `
  <style>
    .row {
      border-style: solid;
    }
  </style>
  <div class="row">row</div>
`;

export default class Row extends HTMLElement {
  static get observedAttributes() {
    return [];
  }

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('row-card', Row);
