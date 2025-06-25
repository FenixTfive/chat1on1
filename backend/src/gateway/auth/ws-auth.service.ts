import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class WsAuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) { }

  async authenticate(token: string): Promise<any> {

    const payload = this.jwtService.verify(token);

    const user = await this.prisma.user.findFirst({
      where: { id: payload.sub, email: payload.email },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        isDeleted: true,
      },
    });

    if (!user) throw new Error('Account was disabled');
    return user;
  }


}
