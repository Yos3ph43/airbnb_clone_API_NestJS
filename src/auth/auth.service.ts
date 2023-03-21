import { HttpException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt/dist'
import { ConfigService } from '@nestjs/config'
import { PrismaClient } from '@prisma/client'
import { PrismaService } from '../prisma/prisma.service'
import * as bcrypt from 'bcrypt'


@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private configService: ConfigService,
        private prisma: PrismaService
    ) { }

    async login(data): Promise<any> {

        try {
            const { email, password } = data
            //check mail
            const check = await this.prisma.user.findFirst({
                where: {
                    email
                }
            })
            console.log(check);
            if (!check) return new HttpException("Invalid email!", 200)
            //check password
            const isValid = await bcrypt.compare(password, check.password)
            if (!isValid) return new HttpException("Incorrect Password!", 200)
            //generate token
            const token = this.jwtService.sign({ data: { ...check, password: '****' } }, { secret: this.configService.get('SECRET_KEY'), expiresIn: "10m" })
            return token
        } catch (error) {
            console.log(error);
            throw new HttpException("Lỗi òi :((", 500)
        }
    }

    async signup(data): Promise<any> {
        try {
            const { password } = data
            await this.prisma.user.create({ data: { ...data, password: await bcrypt.hash(password, 10) } })
            return "signed up!"
        } catch (error) {
            console.log(error);
            throw new HttpException("Lỗi òi :((", 500)
        }
    }
}
