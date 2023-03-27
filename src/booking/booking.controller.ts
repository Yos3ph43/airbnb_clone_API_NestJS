import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common/decorators";
import { BookingService } from "./booking.service";

@Controller('booking')
export class BookingController {
    constructor(
        private bookingService: BookingService
    ) { }

    @Get('getBookingByUserId/:user_id')
    getBookingByUserId(
        @Param('user_id') user_id: string
    ): Promise<any> {
        return this.bookingService.getBookingByUserId(user_id)
    }

    @Get('getBooking')
    getBooking(): Promise<any> {
        return this.bookingService.getBooking()
    }
    @Get('getBookingById/:booking_id')
    getBookingById(
        @Param('booking_id') booking_id: string
    ): Promise<any> {
        return this.bookingService.getBookingById(booking_id)
    }

    @Post('postBooking/:room_id/:user_id')
    postBooking(
        @Param('room_id') room_id: string,
        @Param('user_id') user_id: string,
        @Body() input: any
    ): Promise<any> {
        return this.bookingService.postBooking(input, room_id, user_id)
    }

    @Put('updateBooking/:booking_id')
    updateBooking(
        @Param('booking_id') booking_id: string,
        @Body() input: any
    ): Promise<any> {
        return this.bookingService.updateBooking(input, booking_id)
    }

    @Delete('deleteBooking/:booking_id')
    deleteBooking(
        @Param('booking_id') booking_id: string,
    ): Promise<any> {
        return this.bookingService.deleteBooking(booking_id)
    }
}