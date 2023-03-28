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
            return new HttpException("Hư", 500)
        }
    }

    async getBooking(): Promise<any> {
        try {
            const data = await this.prisma.booking.findMany()
            return new HttpException({ data, message: "Success" }, 200)
        } catch (error) {
            return new HttpException("Lỗi gì òi :((", 500)
        }
    }

    async getBookingById(booking_id: string): Promise<any> {
        try {
            const data = await this.prisma.booking.findMany({
                where: {
                    booking_id: Number(booking_id)
                }
            })
            return new HttpException({ data, message: "Success" }, 200)
        } catch (error) {
            return new HttpException("Lỗi gì òi :((", 500)
        }
    }

    async postBooking(input: any, room_id: string, user_id: string): Promise<any> {
        try {
            const data = {
                ...input,
                room_id: Number(room_id),
                user_id: Number(user_id)
            }
            await this.prisma.booking.create({ data })
            return new HttpException("Booked!", 200)

        } catch (error) {
            console.log(error);
            return new HttpException("Lỗi gì òi :((", 500)
        }
    }

    async updateBooking(data: any, booking_id: string): Promise<any> {
        try {
            await this.prisma.booking.update({
                data,
                where: {
                    booking_id: Number(booking_id)
                }
            })
            return new HttpException("Booking Updated!", 200)
        } catch (error) {
            console.log(error);
            return new HttpException("Lỗi gì òi :((", 500)
        }
    }
    async deleteBooking(booking_id): Promise<any> {
        try {
            await this.prisma.booking.delete({
                where: {
                    booking_id: Number(booking_id)
                }
            })
            return new HttpException("Booking Deleted!", 200)
        } catch (error) {
            console.log(error);
            return new HttpException("Lỗi gì òi :((", 500)
        }
    }
}
