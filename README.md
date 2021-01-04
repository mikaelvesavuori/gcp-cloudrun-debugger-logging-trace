# GCP Cloud Run: Demo of Cloud Debugger, Logging, Trace and structured logs [WIP, unfinished]

Demo of using GCP services for debugging, logging and tracing with Cloud Run.

## Prerequisites

- You have a GCP account
- You are logged in through your environment
- You have set your variables as needed in `deploy.sh`

### Deploy to GCP

Run `deploy.sh`. Your deployed URL will be in the format `https://{NAME}-{RANDOM}.cloudfunctions.a.run.app`.

### Check logs

Basic logs are available in the [Logs view](https://console.cloud.google.com/logs/query) and the full, structured logs can be seen in [Cloud Logging](https://console.cloud.google.com/logs/query).

### Setup logpoints and other debugging stuff

Go to [https://console.cloud.google.com/debug](https://console.cloud.google.com/debug).

### Check traces

Go to [https://console.cloud.google.com/traces/list](https://console.cloud.google.com/traces/list).

### Remove resources

Remove the Cloud Run instance from the [Cloud Run view](https://console.cloud.google.com/run).

## References

- [Setting Up Cloud Debugger for Node.js](https://cloud.google.com/debugger/docs/setup/nodejs)
- [Setting up Cloud Trace for Node.js](https://cloud.google.com/trace/docs/setup/nodejs)
- [Writing structured logs](https://cloud.google.com/run/docs/logging#writing_structured_logs)
