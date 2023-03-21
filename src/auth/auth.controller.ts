import { Controller, Post, Get, Body, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    @Post('login')
    login(
        @Body() data: any
    ): Promise<any> {
        return this.authService.login(data)
    }

    @Post('signup')
    signup(
        @Body() data: string
    ): any {
        return this.authService.signup(data)
    }

    @Get('getSome')
    getSome() {
        return "getsome"
    }
}
