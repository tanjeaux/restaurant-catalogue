import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './views/hero-element/hero';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const skipToContent = document.querySelector('.skip-to-content');
const maincontent = document.querySelector('#main-content');

skipToContent.addEventListener('keypress', (event) => {
  event.preventDefault();
  if (event.key === 'Enter') {
    maincontent.focus();
  }
});

// eslint-disable-next-line no-unused-vars
const app = new App({
  hero: document.querySelector('hero-div'),
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
