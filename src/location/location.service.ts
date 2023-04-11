import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LocationDto, LocationDtoBody } from './dto/location.dto';

@Injectable()
export class LocationService {
  constructor(private prisma: PrismaService) {}

  async getLocation(): Promise<{ message: string; data: LocationDto[] }> {
    try {
      const data = await this.prisma.location.findMany();
      return { message: 'Lấy danh sách vị trí thành công!', data: data };
    } catch (error) {
      throw new HttpException('Lỗi Backend', 500);
    }
  }

  async postLocation(
    input: LocationDtoBody,
  ): Promise<{ message: string; data: LocationDto[] }> {
    try {
      const checkLocationName = await this.prisma.location.findFirst({
        where: { location_name: input.location_name },
      });
      if (checkLocationName)
        return { message: 'Location Name đã tồn tại!', data: [] };
      const data = { ...input };
      await this.prisma.location.create({ data });
      const createdLocation = await this.prisma.location.findFirst({
        where: {
          location_name: input.location_name,
          city: input.city,
          country: input.country,
          picture: input.picture,
        },
      });
      return {
        message: 'Thêm mới vị trí thành công!',
        data: [createdLocation],
      };
    } catch (error) {
      console.error(error);
      throw new HttpException('Lỗi Backend', 500);
    }
  }

  async searchLocationPagination(
    page: number,
    pageSize: number,
    locationName: string,
  ): Promise<{ message: string; data: LocationDto[] }> {
    try {
      const data = await this.prisma.location.findMany({
        //dùng take, skip có sẵn trong prisma để phân trang
        take: Number(pageSize), //số item muốn hiện trên 1 trang
        skip: Number(pageSize) * (page - 1), //ví dụ: nếu muốn hiện 2 item trên 1 trang, khi chọn trang 4 thì bỏ qua 6 item
        where: {
          location_name: { contains: locationName },
        },
      });
      return {
        message: 'Kết quả phân trang ' + page,
        data,
      };
    } catch (error) {
      console.error(error);
      throw new HttpException('Lỗi Backend', 500);
    }
  }

  async searchLocationById(
    location_id: number,
  ): Promise<{ message: string; data: LocationDto[] }> {
    try {
      const data = await this.prisma.location.findUnique({
        where: { location_id: Number(location_id) },
      });
      if (data) {
        return { message: 'Kết quả tìm được!', data: [data] };
      } else return { message: 'Không có Location ID này!', data: [] };
    } catch (error) {
      throw new HttpException('Lỗi Backend', 500);
    }
  }

  async updateLocationById(
    body: LocationDtoBody,
  ): Promise<{ message: string; data: LocationDto[] }> {
    try {
      const { location_id } = body;
      const checkLocationId = await this.prisma.location.findUnique({
        where: { location_id: Number(location_id) },
      });
      if (!checkLocationId)
        return { message: 'Không tìm thấy Location ID!', data: [] };
      const data = { ...body };
      await this.prisma.location.update({
        data,
        where: { location_id: Number(location_id) },
      });
      return { message: 'Update thành công!', data: [data] };
    } catch (error) {
      throw new HttpException('Lỗi Backend!', 500);
    }
  }

  async deleteLocationbyId(
    location_id: number,
  ): Promise<{ message: string; data: LocationDto[] }> {
    try {
      const checkLocationId = await this.prisma.location.findUnique({
        where: { location_id: Number(location_id) },
      });
      if (!checkLocationId)
        return { message: 'Không tìm thấy Location ID', data: null };

      await this.prisma.room.updateMany({
        where: { location_id: Number(location_id) },
        data: { location_id: null },
      });
      const data = await this.prisma.location.delete({
        where: { location_id: Number(location_id) },
      });

      return { message: 'Xóa thành công!', data: [data] };
    } catch (error) {
      console.error(error); //Log lỗi backend
      throw new HttpException('Lỗi Backend!', 500);
    }
  }

  async uploadLocationPictureById(
    location_id: number,
    file: Express.Multer.File,
  ): Promise<{ message: string; data: Express.Multer.File }> {
    try {
      const checkLocationId = await this.prisma.location.findUnique({
        where: { location_id: Number(location_id) },
      });
      if (!checkLocationId)
        return { message: 'Không tìm thấy Location ID', data: null };

      const picture = `http://localhost:8080/public/uploadImg/${file.filename}`;
      await this.prisma.location.update({
        data: { picture },
        where: { location_id: Number(location_id) },
      });
      return { message: 'Thêm hình ảnh thành công!', data: file };
    } catch (error) {
      throw new HttpException('Lỗi Backend!', 500);
    }
  }
}
