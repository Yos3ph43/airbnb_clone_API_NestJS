import { Controller, Post, Get, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    @Post('login')
    login(data): string {
        return this.authService.login(data)
    }

    @Post('signup')
    signup(
        @Body() data: Promise<any>
    ): any {
        return this.authService.signup(data)
    }

    @Get('getSome')
    getSome() {
        return "getsome"
    }
}
