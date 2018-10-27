const yargs = require('yargs');
const Server = require('./app');

const argv = yargs
    .usage('anydoor [options]')
    .option('p', {
        alias: 'port',
        describe: '端口号',
        default: 3157
    })
    .option('h', {
        alias: 'host',
        describe: 'host',
        default: '127.0.0.1'
    })
    .option('d', {
        alias: 'root',
        describe: 'root path',
        default: process.cwd()
    })
    .version()
    .option('v', 'version')
    .help()
    .argv;

const server = new Server(argv);
server.start();