import rrwebCloud from "@rrwebcloud/js-client";
rrwebCloud.start({
  serverUrl: "https://api.rrwebcloud.com/recordings/{recordingId}/ingest/ws",
  publicApiKey: "public-api-key", // <-- please add your public api key here
  blockSelector: ".my-block-class",
  captureAssets: {
    images: true, // capturing the blob image!
    video: false,
    audio: false,
  },
  meta: {
    userId: "user-123",
    sessionId: "existing-session-id",
    orgId: "org-9",
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
