import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';


const app = new App({
  button: document.querySelector('#hamburgerBtn'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#main'),
});


window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});