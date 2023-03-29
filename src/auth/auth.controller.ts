import { Controller, Post, Get, Body, HttpStatus, HttpException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist';
import { AuthService } from './auth.service';
import { LoginBody, LoginDto, SignupBody } from './dto/auth.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    @Post('login')
    login(
        @Body() data: LoginBody
    ): Promise<LoginDto | HttpException> {
        return this.authService.login(data)
    }

    @Post('signup')
    signup(
        @Body() data: SignupBody
    ): Promise<HttpException> {
        return this.authService.signup(data)
    }

}
