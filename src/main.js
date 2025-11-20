import rrwebCloud from "@rrwebcloud/js-client";
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

rrwebCloud.start({
  serverUrl: "https://rrwebcloud.com/recordings/{recordingId}/ingest/ws",
  blockSelector: ".my-block-class",
  captureAssets: {
    video: false,
    audio: false,
  },
  meta: {
    user_id: "user-123",
    session_id: "existing-session-id",
    org_id: "org-9",
    plan: "pro",
    environment: "production",
  },
});

let recordingId = rrwebCloud.getRecordingId();
if (recordingId) {
  console.log(`
    recording can be retrieved from
    https://api.rrwebcloud.com/recordings/${recordingId}
`);
} else {
  console.log(`recording not possible due to sessionStorage restrictions`);
}
