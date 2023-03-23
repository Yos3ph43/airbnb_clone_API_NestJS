import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookingService {
    constructor(
        private prisma: PrismaService
    ) { }
    async getBookingByUserId(user_id): Promise<any> {
        try {
            return await this.prisma.booking.findMany({
                where: {
                    user_id: Number(user_id)
                }
            })
        } catch (error) {
            console.log(error);
            return new HttpException("Hư", 500)
        }
    }
}
