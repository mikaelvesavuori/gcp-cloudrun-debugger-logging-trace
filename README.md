# GCP Cloud Run: Demo of Cloud Debugger, Logging, Trace and structured logs

Demo of using GCP services for debugging, logging and tracing with Cloud Run.

## Prerequisites

- You have a GCP account
- You are logged in through your environment
- You have set your variables as needed in `deploy.sh`

## Instructions

- Install dependencies with `npm install` or `yarn install`.
- Run `npm start` or `yarn start`
- Call or visit endpoint; should be `http://localhost:8080/`

### Deploy to GCP

Run `deploy.sh`. Your deployed URL will be in the format `https://{REGION}-{PROJECT}.cloudfunctions.net/{FUNCTION}`. Logs are available in the [Logs view](https://console.cloud.google.com/logs/query) or through the [Functions view](https://console.cloud.google.com/functions/list).

### Remove resources

Run `teardown.sh`. Make sure that any variables you have changed are updated in that script as well.

## References

- [Setting Up Cloud Debugger for Node.js](https://cloud.google.com/debugger/docs/setup/nodejs)
- [Setting up Cloud Trace for Node.js](https://cloud.google.com/trace/docs/setup/nodejs)
- [Writing structured logs](https://cloud.google.com/run/docs/logging#writing_structured_logs)
