import {colors} from './fifty-shades-of-cold.data.js';

function generateClasses() {
  const style = document.createElement('style');
  style.textContent = colors.map(color => `.${color} { background: ${color}; }`).join('\n');
  document.head.appendChild(style);
}

function generateColdShades() {
  const coldShades = colors.filter(color => /(aqua|blue|turquoise|green|cyan|navy|purple)/i.test(color));
  const container = document.querySelector('#cold-shades');
  container.innerHTML = coldShades.map(color => `<div class="${color}">${color}</div>`).join('\n');
}

function choseShade(shade) {
  const elements = document.querySelectorAll('#cold-shades div');
  elements.forEach(element => {
    element.className = shade;
  });
}

generateClasses();
generateColdShades();

const container = document.querySelector('#cold-shades');
container.addEventListener('click', event => {
  if (event.target.tagName === 'DIV') {
    choseShade(event.target.className);
  }
});
