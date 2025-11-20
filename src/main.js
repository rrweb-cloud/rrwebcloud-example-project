import './rrwebcloud-init.js'
import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

// Create a Blob URL image to verify rrweb recording
const canvas = document.createElement('canvas');
canvas.width = 200;
canvas.height = 100;
const ctx = canvas.getContext('2d');

// Draw a colorful pattern
const gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, 'red');
gradient.addColorStop(0.5, 'green');
gradient.addColorStop(1, 'blue');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 200, 100);

ctx.fillStyle = 'white';
ctx.font = '20px Arial';
ctx.fillText('Blob Image', 50, 55);

canvas.toBlob((blob) => {
  const url = URL.createObjectURL(blob);
  const img = document.createElement('img');
  img.src = url;
  img.alt = 'Blob URL Verification Image';
  img.style.border = '2px solid black';
  img.style.marginTop = '20px';
  img.style.display = 'block';
  img.style.marginLeft = 'auto';
  img.style.marginRight = 'auto';
  
  // Add to the DOM
  const container = document.querySelector('#app');
  const p = document.createElement('p');
  p.textContent = `Blob URL: ${url}`;
  p.style.fontSize = '12px';
  p.style.wordBreak = 'break-all';
  
  container.appendChild(img);
  container.appendChild(p);
});
