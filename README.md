# GCP Cloud Run: Demo of Cloud Debugger, Logging, Trace and structured logs [WIP, unfinished]

Demo of using GCP services for debugging, logging and tracing with Cloud Run.

## Prerequisites

- You have a GCP account
- You are logged in through your environment
- You have set your variables as needed in `deploy.sh`

### Deploy to GCP

Run `deploy.sh`. Your deployed URL will be in the format `https://{REGION}-{PROJECT}.cloudfunctions.net/{FUNCTION}`. Logs are available in the [Logs view](https://console.cloud.google.com/logs/query) or through the [Functions view](https://console.cloud.google.com/functions/list).

### Setup logpoints

Go to [https://console.cloud.google.com/debug](https://console.cloud.google.com/debug).

### Remove resources

Run `teardown.sh`. Make sure that any variables you have changed are updated in that script as well.

## References

- [Setting Up Cloud Debugger for Node.js](https://cloud.google.com/debugger/docs/setup/nodejs)
- [Setting up Cloud Trace for Node.js](https://cloud.google.com/trace/docs/setup/nodejs)
- [Writing structured logs](https://cloud.google.com/run/docs/logging#writing_structured_logs)
