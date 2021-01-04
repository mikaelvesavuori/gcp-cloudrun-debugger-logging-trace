const Logger = require('./logger');

const PROJECT_ID = 'your-project-id';

const REQ = {
  headers: {
    'X-Cloud-Trace-Context': '28h92h92hd9dslkjdf'
  }
};

const logger = new Logger(PROJECT_ID, REQ);
logger.log('Something here!');
