const pino = require('pino')
const log = pino({ name: 'runEcs-task', level: 'debug' })

module.exports = () => {
  log.debug('I am pino')
}

