import { Injectable, Logger, INestApplication } from '@nestjs/common';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { ExtendedError, ServerOptions, Socket } from 'socket.io';
import { WsAuthService } from '../gateway/auth/ws-auth.service';

@Injectable()
export class AuthenticatedSocketIoAdapter extends IoAdapter {
    private wsAuthService: WsAuthService;
    private logger: Logger;

    constructor(private app: INestApplication) {
        super(app);
        // we get the WsAuthService and Logger from the app context
        this.wsAuthService = this.app.get(WsAuthService);
        this.logger = this.app.get(Logger);
    }

    createIOServer(port: number, options?: ServerOptions): any {
        const server = super.createIOServer(port, options);

        server.use(async (client: Socket, next: (err?: ExtendedError) => void) => {
            try {

                const token = client.handshake.auth.token || client.handshake.headers['authorization'];

                if (!token) {
                    throw new Error('No token provided');
                }
                // If you are using query parameters, you can extract the token like this:
                const user = await this.wsAuthService.authenticate(token);
                client.data.user = user; // Store the user for later access in your Gateway
                next();
            } catch (err) {
                this.logger.error('Auth error', err);
                next(new Error('Unauthorized'));
            }
        });

        return server;
    }
}