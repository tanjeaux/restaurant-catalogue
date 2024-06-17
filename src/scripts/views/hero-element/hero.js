class Hero extends HTMLElement {
  constructor() {
    super();

    this._style = document.createElement('style');
  }

  _updateStyle() {
    this._style.textContent = `
    .hero-title {
      color: #3E3232;
      font-size: 36px;
    }
    
    .hero-p {
      color: #3E3232;
      font-size: 18px;
      font-style: italic;
      margin-top: 16px;
    }

    .hero {
      width: 100%;
      display: flex;
      position: relative;
      min-height: 500px;
      align-items: center;
      text-align: center;
    }
    
    .hero::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background-image: url(images/hero-image_4-large.jpg);
      background-position: center;
      background-size: cover;
      opacity: 0.95;
    }
    
    .hero-inner {
      position: relative;
      text-align: center;
      margin: auto;
      z-index: 1;
      background-color: #FFF8EA;
      padding: 25px;
      border-radius: 15px;
      animation: fade 5s ease forwards;
    }

    @keyframes fade {
      from {
      opacity: 0%;
      }
      to {
      opacity: 0.9;
      }
    }

    @media screen and (max-width: 650px) {
      .hero::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-image: url(/images/hero-image_4-small.jpg);
        background-position: center;
        background-size: cover;
        opacity: 0.9;
      }
    }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._updateStyle();

    this.innerHTML = `
    ${this._style.outerHTML}

    <div class="hero">
      <div class="hero-inner">
        <h1 class="hero-title" tabindex="0">Dine Better, Discover More</h1>
        <p class="hero-p" tabindex="0">"Discover your next Dining Adventure!"</p>
      </div>
    </div>
    `;
  }
}

customElements.define('hero-div', Hero);
