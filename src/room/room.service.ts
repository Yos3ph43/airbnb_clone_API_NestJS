import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from "src/prisma/prisma.service";
import { RoomDto } from './roomDto/room.dto';

@Injectable()
export class RoomService {
    constructor(
        private prisma: PrismaService
    ) { }

    async getRoom(): Promise<any> {
        try {
            const data = await this.prisma.room.findMany()
            return new HttpException({ data, message: "Get room success" }, HttpStatus.OK)
        } catch (error) {
            return new HttpException(error, HttpStatus.BAD_REQUEST)
        }
    }

    async addRoom(input: RoomDto): Promise<any> {
        try {
            const data = { ...input }
            await this.prisma.room.create({ data })
            return new HttpException({ data, message: "Add room success" }, HttpStatus.OK)
        } catch (error) {
            return new HttpException(error, HttpStatus.BAD_REQUEST)
        }
    }

    async getRoomByLocationId(location_id: string): Promise<any> {
        try {
            const data = await this.prisma.room.findMany({ where: { location_id: Number(location_id) } })
            return new HttpException({ data, message: "Success" }, HttpStatus.OK)
        } catch (error) {
            return new HttpException(error, HttpStatus.BAD_REQUEST)
        }
    }
}