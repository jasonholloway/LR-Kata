import createServer from './createServer'

const port = 12345;

console.info(`Listening on port ${port}!`);

createServer({ publicPath: 'dist/public' })
    .listen(port);
