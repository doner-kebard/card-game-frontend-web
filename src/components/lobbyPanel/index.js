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
    .glitch:hover {
      position: relative;
      color: white;
      /*font-size: 4em;
      letter-spacing: .5em;
      /* Animation provies a slight random skew. Check bottom of doc
      for more information on how to random skew. */
      animation: glitch-skew 1s infinite linear alternate-reverse;
    }
    .glitch:hover::before {
      content: attr(data-text);
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      left: 2px;
      text-shadow: -2px 0 #ff00c1;
      /* Creates an initial clip for our glitch. This works in
      a typical top,right,bottom,left fashion and creates a mask
      to only show a certain part of the glitch at a time. */
      clip: rect(44px, 450px, 56px, 0);
      /* Runs our glitch-anim defined below to run in a 5s loop, infinitely,
      with an alternating animation to keep things fresh. */
      animation: glitch-anim 2s infinite linear alternate-reverse;
    }
    .glitch:hover::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      left: -2px;
      text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
      animation: glitch-anim2 2s infinite linear alternate-reverse;
    }
    
    /* Creates an animation with 20 steaps. For each step, it calculates 
    a percentage for the specific step. It then generates a random clip
    box to be used for the random glitch effect. Also adds a very subtle
    skew to change the 'thickness' of the glitch.*/
    @keyframes glitch-anim {
      0% {
        clip: rect(93px, 9999px, 32px, 0);
        transform: skew(0.31deg);
      }
      5% {
        clip: rect(33px, 9999px, 93px, 0);
        transform: skew(0.13deg);
      }
      10% {
        clip: rect(94px, 9999px, 94px, 0);
        transform: skew(0.29deg);
      }
      15% {
        clip: rect(55px, 9999px, 92px, 0);
        transform: skew(0.93deg);
      }
      20% {
        clip: rect(38px, 9999px, 49px, 0);
        transform: skew(0.28deg);
      }
      25% {
        clip: rect(45px, 9999px, 19px, 0);
        transform: skew(0.08deg);
      }
      30% {
        clip: rect(58px, 9999px, 47px, 0);
        transform: skew(0.71deg);
      }
      35% {
        clip: rect(20px, 9999px, 64px, 0);
        transform: skew(0.87deg);
      }
      40% {
        clip: rect(96px, 9999px, 29px, 0);
        transform: skew(0.88deg);
      }
      45% {
        clip: rect(65px, 9999px, 95px, 0);
        transform: skew(0.21deg);
      }
      50% {
        clip: rect(7px, 9999px, 28px, 0);
        transform: skew(0.68deg);
      }
      55% {
        clip: rect(70px, 9999px, 2px, 0);
        transform: skew(0.73deg);
      }
      60% {
        clip: rect(95px, 9999px, 15px, 0);
        transform: skew(0.94deg);
      }
      65% {
        clip: rect(59px, 9999px, 98px, 0);
        transform: skew(0.84deg);
      }
      70% {
        clip: rect(100px, 9999px, 65px, 0);
        transform: skew(0.99deg);
      }
      75% {
        clip: rect(18px, 9999px, 51px, 0);
        transform: skew(0.38deg);
      }
      80% {
        clip: rect(92px, 9999px, 33px, 0);
        transform: skew(0.33deg);
      }
      85% {
        clip: rect(18px, 9999px, 100px, 0);
        transform: skew(0.72deg);
      }
      90% {
        clip: rect(87px, 9999px, 67px, 0);
        transform: skew(0.21deg);
      }
      95% {
        clip: rect(7px, 9999px, 60px, 0);
        transform: skew(0.69deg);
      }
      100% {
        clip: rect(77px, 9999px, 68px, 0);
        transform: skew(0.36deg);
      }
    }
    @keyframes glitch-anim2 {
      0% {
        clip: rect(44px, 9999px, 4px, 0);
        transform: skew(0.71deg);
      }
      5% {
        clip: rect(66px, 9999px, 58px, 0);
        transform: skew(0.91deg);
      }
      10% {
        clip: rect(24px, 9999px, 21px, 0);
        transform: skew(0.36deg);
      }
      15% {
        clip: rect(4px, 9999px, 58px, 0);
        transform: skew(0.59deg);
      }
      20% {
        clip: rect(50px, 9999px, 33px, 0);
        transform: skew(0.18deg);
      }
      25% {
        clip: rect(5px, 9999px, 14px, 0);
        transform: skew(0.91deg);
      }
      30% {
        clip: rect(10px, 9999px, 70px, 0);
        transform: skew(0.58deg);
      }
      35% {
        clip: rect(36px, 9999px, 74px, 0);
        transform: skew(0.8deg);
      }
      40% {
        clip: rect(99px, 9999px, 83px, 0);
        transform: skew(0.32deg);
      }
      45% {
        clip: rect(23px, 9999px, 33px, 0);
        transform: skew(0.07deg);
      }
      50% {
        clip: rect(40px, 9999px, 93px, 0);
        transform: skew(0.72deg);
      }
      55% {
        clip: rect(4px, 9999px, 96px, 0);
        transform: skew(0.74deg);
      }
      60% {
        clip: rect(46px, 9999px, 23px, 0);
        transform: skew(0.96deg);
      }
      65% {
        clip: rect(94px, 9999px, 16px, 0);
        transform: skew(0.95deg);
      }
      70% {
        clip: rect(90px, 9999px, 8px, 0);
        transform: skew(0.66deg);
      }
      75% {
        clip: rect(95px, 9999px, 91px, 0);
        transform: skew(0.94deg);
      }
      80% {
        clip: rect(24px, 9999px, 80px, 0);
        transform: skew(0.62deg);
      }
      85% {
        clip: rect(62px, 9999px, 78px, 0);
        transform: skew(0.73deg);
      }
      90% {
        clip: rect(10px, 9999px, 43px, 0);
        transform: skew(0.67deg);
      }
      95% {
        clip: rect(14px, 9999px, 32px, 0);
        transform: skew(0.22deg);
      }
      100% {
        clip: rect(99px, 9999px, 78px, 0);
        transform: skew(0.93deg);
      }
    }
    @keyframes glitch-skew {
      0% {
        transform: skew(1deg);
      }
      10% {
        transform: skew(-3deg);
      }
      20% {
        transform: skew(1deg);
      }
      30% {
        transform: skew(3deg);
      }
      40% {
        transform: skew(-2deg);
      }
      50% {
        transform: skew(5deg);
      }
      60% {
        transform: skew(-1deg);
      }
      70% {
        transform: skew(5deg);
      }
      80% {
        transform: skew(3deg);
      }
      90% {
        transform: skew(3deg);
      }
      100% {
        transform: skew(2deg);
      }
    }

  </style>
  <div>
    <span>Troll Card Game</span>
    <button class="glitch" id="game-btn" data-text="game" >game</button>
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
