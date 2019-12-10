import { createGame } from '../../apiCalls/fake.js';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    div {
      border-radius: 15px;
      width: 675px;
      height: 400px;
      background-image: url("../../../images/frame.jpg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    span {
      position: relative;
      top: 25%;
      color: white;
      font-size: 60px;
    }
    button {
      width: fit-content;
      position: relative;
      top: 50%;
      font-size: 35px;
      color: white;
      background-color: black;
      border: none;
      cursor: pointer;
    }
    button:focus {
      outline: 0;
    }
  </style>
  <div>
    <span>Troll Card Game</span>
    <button id="game-btn">game</button>
  </div>
`;

export default class LobbyPanel extends HTMLElement {
  static get observedAttributes() {
    return [];
  }

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this._gameBtn = this._shadowRoot.getElementById('game-btn');
  }

  connectedCallback() {
    this._gameBtn.addEventListener('click', this.onClickHandler);
  }

  disconnectedCallback() {
    this._gameBtn.removeEventListener('click', this.onClickHandler);
  }

  async onClickHandler() {
    const id = await createGame();
    const url = new URL('/game', location.origin);
    url.searchParams.set('id', String(id));

    location.href = url.href;
  }
}

window.customElements.define('lobby-panel-item', LobbyPanel);
