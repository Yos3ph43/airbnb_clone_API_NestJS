import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client'
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private configService: ConfigService,
        private prisma: PrismaService
    ) { }

    login(data): string {
        let token = this.jwtService.sign({ data }, { secret: this.configService.get('SECRET_KEY'), expiresIn: "10m" })
        // let token = "token"
        return token
    }



    async signup(data): Promise<any> {
        try {
            await this.prisma.user.create({ data })
            return "signed up!"
        } catch (error) {
            return "error"
        }
    }


}
