// Refer to: https://cloud.google.com/run/docs/logging#writing_structured_logs

class Logger {
  constructor(projectId, req) {
    this.projectId = projectId || process.env.GOOGLE_CLOUD_PROJECT;
    this.req = req;
  }

  log(message, severity = 'NOTICE') {
    const globalLogFields = {};
    const traceHeader = this.req.headers['x-cloud-trace-context'] || this.req.headers['X-Cloud-Trace-Context'];
    if (!traceHeader || !this.projectId) throw new Error('Missing trace header or project ID');

    const [trace] = traceHeader.split('/');
    globalLogFields['logging.googleapis.com/trace'] = `projects/${this.projectId}/traces/${trace}`;

    const entry = Object.assign(
      {
        severity,
        message,
        component: 'arbitrary-property'
      },
      globalLogFields
    );

    console.log(JSON.stringify(entry));
  }
}

module.exports = Logger;
