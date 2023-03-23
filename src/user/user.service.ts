import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {

    private prisma: PrismaClient = new PrismaClient()

    getUser(): Promise<UserDto[]> {
        return this.prisma.user.findMany()
    }

    addUser(name: string,): Promise<UserDto[]> {

        return this.prisma.user.create()
    }
}
