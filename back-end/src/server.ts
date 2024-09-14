import express from 'express';
import expressWs from 'express-ws';
import protobuf from 'protobufjs';
import EventDispatcher from 'game-engine/src/event/EventDispatcher';

class Server {
    app: express.Application;
    wsApp: expressWs.Application;
    // emitter: ;

    constructor() {
        this.app = express();
        const wsInstance = expressWs(this.app);
        this.wsApp = wsInstance.app;

        this.wsApp.ws('/game', (ws) => {
            console.log('Nouvelle connexion WebSocket établie');

            ws.on('message', (msg) => {
                console.log(`Message reçu : ${msg}`);
                ws.send(`Echo : ${msg}`);
            });

            ws.on('close', () => {
                console.log('Connexion WebSocket fermée');
            });
        });
    }

    start(port: number) {
        this.app.listen(port, () => {
            console.log(`Serveur lancé sur http://localhost:${port}`);
        });
    }
}

export default Server;