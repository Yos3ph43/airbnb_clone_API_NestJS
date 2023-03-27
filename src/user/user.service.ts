import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
import { connect } from 'http2';
import { UserDto } from './dto/user.dto';
import { UserSearchPagination } from './dto/userSearchPagination.dto';

@Injectable()
export class UserService {

    private prisma: PrismaClient = new PrismaClient()

    async getUser(): Promise<any> {
        try {
            const data = await this.prisma.user.findMany()
            return new HttpException({ data, message: "Get user success" }, 200)
        } catch (error) {
            return new HttpException({ reason: error }, HttpStatus.BAD_REQUEST)
        }
    }

    async addUser(input: UserDto): Promise<any> {
        try {
            const data = { ...input }
            const checkEmail = await this.prisma.user.findFirst({ where: { email: data.email } })
            if (!checkEmail) {
                await this.prisma.user.create({ data })
                return new HttpException({ data, message: "User added" }, 200)
            }
            return new HttpException("Email already used", 401)
        } catch (error) {
            return new HttpException({ message: error }, HttpStatus.BAD_REQUEST)

        }
    }

    async deleteUser(user_id: string): Promise<any> {
        try {
            const checkUserId = await this.prisma.user.findFirst({
                where: { user_id: Number(user_id) }
            })
            if (!checkUserId) return new HttpException("User already deleted or not existed", 401)

            const data = await this.prisma.user.delete({
                where: { user_id: Number(user_id) }
            })
            return new HttpException({ data, message: "User deleted" }, 200)
        } catch (error) {
            return new HttpException({ message: error }, HttpStatus.BAD_REQUEST)
        }
    }

    //chưa biết làm pageIndex (trang số Index)
    async getSearchPagination(input: UserSearchPagination): Promise<any> {
        try {
            const data = { ...input }
            const dataSearch = await this.prisma.user.findMany({
                where: { name: { contains: data.keyword } }, take: data.pageSize
            })
            return new HttpException({ dataSearch, message: "Get search pagination success" }, HttpStatus.OK)
        } catch (error) {
            return new HttpException({ message: error }, HttpStatus.BAD_REQUEST)
        }
    }
}
