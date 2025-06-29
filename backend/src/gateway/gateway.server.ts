import { Logger } from "@nestjs/common";
import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from "socket.io"

@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
export class GatewayServer implements OnGatewayConnection, OnGatewayDisconnect {
    constructor(
        private readonly logger: Logger, // Inject the authentication service if needed
    ) { }

    @WebSocketServer()
    server: Server;

    handleConnection(client: Socket) {
        //middleware asigns user to client.data.user
        const user = client.data.user;
        this.logger.log(`[Websocket] User connected: ${user.firstName} ${user.lastName} <${user.email}>`);
        // console.log(`Client connected: ${client.id}`);
        // console.log(`Request URL: ${client.request}`);
        // const request = client.request as any; // Cast to any to access headers and url
        // const url = new URL(request.url, `http://${request.headers.host}`);
        // console.log(`Request URL: ${url}`);


    }

    handleDisconnect(client: Socket) {
        this.logger.log(`Client disconnected: ${client.id}`);
    }

    //@ConnectedSocket() helps us to access more methods like client.emit, client.broadcast.emit, etc.
    @SubscribeMessage('message')
    onMessage(@ConnectedSocket() client: Socket, @MessageBody() payload: any): void {
        this.logger.log(`Websocket Client ID: ${client.id}`);
        this.logger.log(`User client data: ${JSON.stringify(client.data.user)}`);
        this.logger.log("Message payload:", payload);

        // Broadcast the message to all connected clients including the sender
        this.server.emit('messageFromServer', {
            message: {
                id: Date.now(), // You can generate a unique ID for the message
                text: payload.text
            },
            user: {
                id: client.data.user.id,
                nickName: client.data.user.nickName,
                firstName: client.data.user.firstName,
                lastName: client.data.user.lastName,
            },
        });
        // Broadcast the message to all connected clients except the sender
        // client.broadcast.emit('messageFromServer', {
        //     message: payload.text,
        //     user: {
        //         id: client.data.user.id,
        //         nickName: client.data.user.nickName,
        //         firstName: client.data.user.firstName,
        //         lastName: client.data.user.lastName,
        //     },
        // });
    }

    // WebSocket gateway implementation
}
