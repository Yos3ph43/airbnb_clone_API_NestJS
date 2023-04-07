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
    file: LocationDtoBody,
  ): Promise<{ message: string; data: LocationDto[] }> {
    try {
      const checkLocationId = await this.prisma.location.findUnique({
        where: { location_id: Number(file.location_id) },
      });
      if (checkLocationId)
        return { message: 'Location ID đã tồn tại!', data: [] };
      const data = { ...file };
      await this.prisma.location.create({ data });
      return { message: 'Thêm mới vị trí thành công!', data: [data] };
    } catch (error) {
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

  async updateLocationById(): Promise<any> {
    try {
        
    } catch (error) {}
  }
}
