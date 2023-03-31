import { HttpException, HttpStatus, Injectable, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { async } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto, UserDtoBody, UserSearchPagination, UserSearchPaginationBody } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(
        private prisma: PrismaService
    ) { }

    async getUser(): Promise<UserDto[] | HttpException> {
        try {
            const data = await this.prisma.user.findMany()
            return new HttpException({ data, message: "Get user success" }, 200)

        } catch (error) {
            return new HttpException(error, HttpStatus.BAD_REQUEST)
        }
    }

    async addUser(input: UserDtoBody): Promise<UserDto[] | HttpException> {
        try {
            const data = { ...input }
            const checkEmail = await this.prisma.user.findFirst({ where: { email: data.email } })
            if (!checkEmail) {
                await this.prisma.user.create({ data })
                return new HttpException({ data, message: "User added" }, 200)
            }
            return new HttpException("Email already used", 401)
        } catch (error) {
            return new HttpException(error, HttpStatus.BAD_REQUEST)

        }
    }

    async deleteUser(user_id: string): Promise<UserDto[] | HttpException> {
        try {
            const checkUserId = await this.prisma.user.findFirst({
                where: { user_id: Number(user_id) }
            })
            if (!checkUserId) return new HttpException("User already deleted or not existed", HttpStatus.NOT_FOUND)

            const data = await this.prisma.user.delete({
                where: { user_id: Number(user_id) }
            })
            return new HttpException({ data, message: "User deleted" }, 200)
        } catch (error) {
            return new HttpException(error, HttpStatus.BAD_REQUEST)
        }
    }

    async getSearchPagination(input: UserSearchPaginationBody): Promise<UserSearchPagination[] | HttpException> {
        try {
            const data = { ...input }
            const dataSearch = await this.prisma.user.findMany({
                where: { name: { contains: data.keyword } }, take: data.pageSize, skip: (data.pageIndex - 1) * data.pageSize
            })
            return new HttpException({ dataSearch, message: "Get search pagination success" }, HttpStatus.OK)
        } catch (error) {
            return new HttpException(error, HttpStatus.BAD_REQUEST)
        }
    }
    async getUserById(user_id: string): Promise<UserDto[] | HttpException> {
        try {
            const data = await this.prisma.user.findFirst({
                where: { user_id: Number(user_id) }
            })
            if (!data) return new HttpException("User already deleted or not existed", HttpStatus.NOT_FOUND)

            return new HttpException({ data, message: "Get user by ID success" }, HttpStatus.OK)
        } catch (error) {
            return new HttpException(error, HttpStatus.BAD_REQUEST)
        }
    }

    async updateUser(user_id: string, input: UserDtoBody): Promise<UserDto[] | HttpException> {
        try {
            const data = { ...input }
            await this.prisma.user.update({
                data,
                where: { user_id: Number(user_id) }
            })
            return new HttpException({ data, message: "User updated" }, HttpStatus.OK)
        } catch (error) {
            return new HttpException(error, HttpStatus.BAD_REQUEST)
        }
    }

    async searchUser(user_name: string): Promise<UserDto[] | HttpException> {
        try {
            const data = await this.prisma.user.findMany({
                where: {
                    name: { contains: user_name }
                }
            })
            return new HttpException(data, HttpStatus.OK)
        } catch (error) {
            return new HttpException(error, HttpStatus.BAD_REQUEST)
        }
    }

    //uploadAvatar
    async updateAvatar(user_id: string, file: Express.Multer.File): Promise<Express.Multer.File | HttpException> {
        try {
            const fs = require('fs');
            await fs.readFile(process.cwd() + "/public/uploadImg/" + file.filename, async (err, data) => {
                const fileName = `data:${file.mimetype};base64,${Buffer.from(data.toString("base64"))}`;

                fs.unlinkSync(process.cwd() + "/public/uploadImg/" + file.filename);

                await this.prisma.user.update({
                    data: { avatar: fileName },
                    where: { user_id: Number(user_id) },
                })
            })
            return new HttpException("Avatar updated", HttpStatus.OK)
        } catch (error) {
            return new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
