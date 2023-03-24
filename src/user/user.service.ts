import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
import { connect } from 'http2';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {

    private prisma: PrismaClient = new PrismaClient()

    async getUser(): Promise<UserDto[]> {
        try {
            return await this.prisma.user.findMany()
        } catch (error) {
            throw new HttpException({ reason: error }, HttpStatus.BAD_REQUEST)
        }
    }

    async addUser(input: UserDto): Promise<any> {
        try {
            const data = { ...input }
            const checkEmail = await this.prisma.user.findFirst({ where: { email: data.email } })
            if (!checkEmail) {
                await this.prisma.user.create({ data })
                return new HttpException(data, 200)
            }
            return new HttpException("Email already used", 401)
        } catch (error) {
            return new HttpException({ message: error }, HttpStatus.BAD_REQUEST)

        }
    }

    async deleteUser(user_id: string): Promise<any> {
        try {
            await this.prisma.user.delete({
                where: { user_id: Number(user_id) }
            })
            return HttpStatus.OK
        } catch (error) {
            return new HttpException({ message: error }, HttpStatus.BAD_REQUEST)
        }
    }
}
