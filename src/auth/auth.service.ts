import { HttpException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt/dist'
import { ConfigService } from '@nestjs/config'
import { PrismaService } from '../prisma/prisma.service'
import * as bcrypt from 'bcrypt'
import { LoginBody, LoginDto, SignupBody } from './dto/auth.dto'


@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private configService: ConfigService,
        private prisma: PrismaService
    ) { }

    async login(data: LoginBody): Promise<LoginDto | HttpException> {
        try {
            const { email, password } = data
            //check mail
            const check = await this.prisma.user.findFirst({
                where: { email }
            })
            if (!check) return new HttpException("Invalid email!", 200)
            //check password
            const isValid = await bcrypt.compare(password, check.password)
            if (!isValid) return new HttpException("Incorrect Password!", 200)
            //generate token
            const token = this.jwtService.sign({ data: { ...check, password: '****' } }, { secret: this.configService.get('SECRET_KEY'), expiresIn: "1y" })
            return { token, user: { ...check, password: '****' } }
        } catch (error) {
            console.log(error);
            throw new HttpException("Lỗi òi :((", 500)
        }
    }

    async signup(data: SignupBody): Promise<HttpException> {
        try {
            const { password } = data
            await this.prisma.user.create({ data: { ...data, password: await bcrypt.hash(password, 10) } })
            return new HttpException("Signed Up! ", 200)
        } catch (error) {
            console.log(error);
            throw new HttpException("Lỗi òi :((", 500)
        }
    }
}
