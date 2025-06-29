import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import { Logger } from '@nestjs/common';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    config: ConfigService,
    private prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('JWT_ACCESS_SECRET'),
    });

    Logger.log('JwtStrategy - registered', JwtStrategy.name);
  }

  async validate(payload: { sub: number; email: string }) {
    const user = await this.prisma.user.findFirst({
      where: { id: payload.sub },
    });
    if (!user) throw new UnauthorizedException('account was disabled');
    const { password, ...userWithoutPassword } = user;

    return userWithoutPassword;
  }
}
