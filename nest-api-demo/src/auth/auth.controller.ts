import { Stringified } from './../../node_modules/ts-jest/node_modules/type-fest/source/stringified.d';
import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup() {
    return this.authService.signup()
  }

  @Post('signin')
  signin() {
     return this.authService.signin()
}
}
