// Reference/from: https://cloud.google.com/run/docs/logging#writing_structured_logs

const projectId = 'your-project-id';

class Logger {
  projectId = null;

  constructor(projectId) {
    this.projectId = projectId;
  }

  create() {
    const globalLogFields = {};

    const traceHeader = req.header('X-Cloud-Trace-Context');
    if (traceHeader && projectId) {
      const [trace] = traceHeader.split('/');
      globalLogFields[
        'logging.googleapis.com/trace'
      ] = `projects/${projectId}/traces/${trace}`;
    }

    const entry = Object.assign(
      {
        severity: 'NOTICE',
        message: 'This is the default display field.',
        // Log viewer accesses 'component' as 'jsonPayload.component'.
        component: 'arbitrary-property',
      },
      globalLogFields
    );

    console.log(JSON.stringify(entry));
    return entry;
  }
}