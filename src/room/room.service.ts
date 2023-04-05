import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RoomDto, RoomDtoBody } from './roomDto/room.dto';

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}

  async getRoom(): Promise<RoomDto[] | HttpException> {
    try {
      const data = await this.prisma.room.findMany();
      return new HttpException(
        { data, message: 'Get room success' },
        HttpStatus.OK,
      );
    } catch (error) {
      return new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async addRoom(input: RoomDtoBody): Promise<RoomDto[] | HttpException> {
    try {
      const data = { ...input };
      await this.prisma.room.create({ data });
      return new HttpException(
        { data, message: 'Add room success' },
        HttpStatus.OK,
      );
    } catch (error) {
      return new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getRoomByLocationId(
    location_id: string,
  ): Promise<RoomDto[] | HttpException> {
    try {
      const data = await this.prisma.room.findMany({
        where: { location_id: Number(location_id) },
      });
      return new HttpException({ data, message: 'Success' }, HttpStatus.OK);
    } catch (error) {
      return new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  /* Coder: Hoàng Hải
    Time: 05/04/2023 */
  async searchRoomById(
    room_id: number,
  ): Promise<{ message: string; data: RoomDto[] }> {
    try {
      const data = await this.prisma.room.findUnique({
        where: { room_id: Number(room_id) },
      });
      if (data) {
        return { message: 'Kết quả tìm được!', data: [data] };
      } else return { message: 'Không tìm thấy!', data: [] };
    } catch (error) {
      throw new HttpException('Lỗi Backend', 500);
    }
  }

  async updateRoomById(
    room_id: number,
    location_id: number,
    body: RoomDtoBody,
  ): Promise<{ message: string; data: RoomDto[] }> {
    try {
      const checkRoomId = await this.prisma.room.findUnique({
        where: { room_id: Number(room_id) },
      });
      if (!checkRoomId) return { message: 'Không tìm thấy Room ID', data: [] };
      const checkLocationId = await this.prisma.location.findUnique({
        where: { location_id: Number(location_id) },
      });
      if (!checkLocationId)
        return { message: 'Không tìm thấy Location ID', data: [] };
      const data = {
        room_id: Number(room_id),
        location_id: Number(location_id),
        ...body,
      };
      await this.prisma.room.update({
        data,
        where: { room_id: Number(room_id) },
      });
      return { message: 'Update thành công!', data: [data] };
    } catch (error) {
      throw new HttpException('Lỗi Backend', 500);
    }
  }

  async updateRoom(
    body: RoomDtoBody,
  ): Promise<{ message: string; data: RoomDtoBody[] }> {
    try {

        const data = {...body}
        console.log(data)

      //   const checkRoomId = await this.prisma.room.findUnique({
      //     where: { room_id: Number(room_id) },
      //   });
      //   if (!checkRoomId) return { message: 'Không tìm thấy Room ID', data: [] };
      //   const checkLocationId = await this.prisma.location.findUnique({
      //     where: { location_id: Number(location_id) },
      //   });
      //   if (!checkLocationId)
      //     return { message: 'Không tìm thấy Location ID', data: [] };
    //   const data = await {
    //     room_id: Number(room_id),
    //     // location_id: Number(location_id),
    //     ...body,
    //   };
      await this.prisma.room.update({
        data,
        where: { room_id: Number(body.room_id) },
      });

      return { message: 'Update thành công!', data: [data] };
    } catch (error) {
      throw new HttpException('Lỗi Backend', 500);
    }
  }
}
