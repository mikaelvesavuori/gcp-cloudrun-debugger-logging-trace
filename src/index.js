/**
 * @description Custom logger to support structured logs
 */
const Logger = require('./logger');

/**
 * @description Fastify
 */
const fastify = require('fastify');
const PORT = process.env.PORT || 8080;
const app = fastify();

/**
 * @description Cloud Debugger
 */
require('@google-cloud/debug-agent').start({ serviceContext: { enableCanary: true } });

/**
 * @description Cloud Trace
 */
require('@google-cloud/trace-agent').start();

/**
 * @description The actual webserver
 */
app.get('/', async (request, reply) => {
  const projectId = 'your-project-id';
  const logger = new Logger(projectId, request);
  logger.log({
    something: 'Something here!',
    dataValue: 23414
  });

  reply.code(200).header('Content-Type', 'application/json').send('Hey!');
});

const start = async () => {
  try {
    await app.listen(PORT, '0.0.0.0');
    app.log.info(`server listening on ${app.server.address().port}`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();
