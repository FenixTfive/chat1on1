import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthLoginDto } from './dto/auth-login-dto';
import { GetUser } from './decorator/get-user.decorator';
import { User } from '@prisma/client';
import { JwtGuard } from './guard';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post("signup")
  @ApiOperation({ summary: 'Create a new user' })
  @ApiOkResponse({ description: 'User created successfully' })
  signUp(@Body() createAuthDto: CreateUserDto) {
    return this.authService.signUp(createAuthDto);
  }

  @Post("signin")
  @ApiOperation({ summary: 'User login' })
  @ApiOkResponse({ description: 'User logged in successfully' })
  signIn(@Body() authLogin: AuthLoginDto) {
    return this.authService.signIn(authLogin);
  }

  @Get('me')
  @UseGuards(JwtGuard)
  @ApiBearerAuth()
  getMe(@GetUser() user: User) {
    return user;
  }
}
