const template = document.createElement('template');
template.innerHTML = `
  <style>
  </style>
  <div>404</div>
`;

export default class ErrorPage extends HTMLElement {
  static get observedAttributes() {
    return [];
  }

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('error-page', ErrorPage);
