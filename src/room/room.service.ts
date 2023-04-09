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
  async searchRoomPagination(
    page: number,
  ): Promise<{ message: string; data: RoomDto[] }> {
    try {
      const data = await this.prisma.room.findMany({
        take: 2,
        skip: 2 * (page - 1),
      });
      return { message: 'Kết quả phân trang ' + page, data };
    } catch (error) {
      throw new HttpException('Lỗi Backend', 500);
    }
  }

  async searchRoomById(
    room_id: number,
  ): Promise<{ message: string; data: RoomDto[] }> {
    try {
      const data = await this.prisma.room.findUnique({
        where: { room_id: Number(room_id) },
      });
      if (data) {
        return { message: 'Kết quả tìm được!', data: [data] };
      } else return { message: 'Không có Room ID này!', data: [] };
    } catch (error) {
      throw new HttpException('Lỗi Backend', 500);
    }
  }

  async updateRoomById(
    body: RoomDtoBody,
  ): Promise<{ message: string; data: RoomDto[] }> {
    try {
      const { room_id, location_id } = await body;
      const checkRoomId = await this.prisma.room.findUnique({
        where: { room_id: Number(room_id) },
      });
      if (!checkRoomId) return { message: 'Không tìm thấy Room ID', data: [] };

      const checkLocationId = await this.prisma.location.findUnique({
        where: { location_id: Number(location_id) },
      });
      if (!checkLocationId)
        return { message: 'Không tìm thấy Location ID', data: [] };

      const data = { ...body };
      await this.prisma.room.update({
        data,
        where: { room_id: Number(room_id) },
      });
      return { message: 'Update thành công!', data: [data] };
    } catch (error) {
      throw new HttpException('Lỗi Backend', 500);
    }
  }

  async deleteRoomById(
    room_id: number,
  ): Promise<{ message: string; data: RoomDto[] }> {
    try {
      const checkRoomId = await this.prisma.room.findUnique({
        where: { room_id: Number(room_id) },
      });
      if (!checkRoomId) return { message: 'Không tìm thấy Room ID', data: [] };

      await this.prisma.booking.deleteMany({
        where: { room_id: Number(room_id) },
      });
      await this.prisma.comment.deleteMany({
        where: { room_id: Number(room_id) },
      });
      const data = await this.prisma.room.delete({
        where: { room_id: Number(room_id) },
      });
      return { message: 'Xóa phòng thuê thành công!', data: [data] };
    } catch (error) {
      console.error('Lỗi Backend:', error); // Log lỗi backend
      throw new HttpException('Lỗi Backend', 500);
    }
  }

  async uploadRoomImageById(
    room_id: number,
    file: Express.Multer.File,
  ): Promise<{ message: string; data: Express.Multer.File }> {
    try {
      const checkRoomId = await this.prisma.room.findUnique({
        where: { room_id: Number(room_id) },
      });
      if (!checkRoomId)
        return { message: 'Không tìm thấy Room ID', data: null };

      const image = `http://localhost:8080/public/uploadImg/${file.filename}`;
      await this.prisma.room.update({
        data: { image },
        where: { room_id: Number(room_id) },
      });
      return { message: 'Thêm hình ảnh thành công!', data: file };
    } catch (error) {
      throw new HttpException('Lỗi Backend', 500);
    }
  }
}
