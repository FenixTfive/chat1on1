import { Module, Logger } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { GatewayServer } from './gateway.server';
import { WsAuthService } from "./auth/ws-auth.service"; // Import the authentication service if needed

@Module({
    imports: [
        JwtModule.registerAsync({
            imports: [ConfigModule], // Import the ConfigModule
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get<string>('JWT_ACCESS_SECRET'),
                // you can add other configuration here if needed
            }),
            inject: [ConfigService], // Inject ConfigService
        }),
    ],
    providers: [GatewayServer, WsAuthService, Logger],
})
export class GatewayModule {
}