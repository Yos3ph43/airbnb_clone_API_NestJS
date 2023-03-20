import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client'


@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private configService: ConfigService,
        // private prisma: PrismaClient = new PrismaClient()
    ) { }
    login(data): string {
        let token = this.jwtService.sign({ data }, { secret: this.configService.get('SECRET_KEY'), expiresIn: "10m" })
        return token
    }

    signup(data): string {
        return "signed up"
    }


}
