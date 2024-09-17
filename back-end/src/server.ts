import express from 'express';
import expressWs, { WebsocketRequestHandler } from 'express-ws';
import protobuf from 'protobufjs';
import * as fs from 'fs';

import EventDispatcher from 'game-engine/src/event/EventDispatcher';

class Server {
    app: express.Application;
    wsApp: expressWs.Application;
    proto: protobuf.Root;
    emitter: EventDispatcher;
    players = {};
    message_queues = [];

    constructor() {
        this.app = express();
        const wsInstance = expressWs(this.app);
        this.wsApp = wsInstance.app;
        this.emitter = new EventDispatcher();
        this.proto = this.loadProtoSync('./proto/game.proto');

        this.wsApp.on('connection', (ws: any) => {
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
        });
    }

    loadProtoSync(protoPath: string): protobuf.Root {
        try {
            const protoContent = fs.readFileSync(protoPath, 'utf8');
            const root = protobuf.parse(protoContent).root;
            console.log('Proto loaded synchronously');
            return root;
        } catch (error) {
            console.error('Error loading proto synchronously:', error);
            throw error;
        }
    }

    async start(port: number) {
        try {
            console.log('Proto loaded successfully');
        } catch (error) {
            console.error('Error loading proto:', error);
        }
        this.app.listen(port, '127.0.0.1', () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    }
}

export default Server;