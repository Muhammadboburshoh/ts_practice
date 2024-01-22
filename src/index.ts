import { Server } from './server';
const server = new Server().app;
const port = 3000;

server.listen(port, () => console.log(`Started app with ${port} port.`));
