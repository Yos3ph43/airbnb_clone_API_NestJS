import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common/decorators";
import { AuthGuard } from "@nestjs/passport";
import { BookingService } from "./booking.service";
import { ApiTags } from '@nestjs/swagger'
import { BookingBody, BookingDto } from "./dto/booking.dto";
import { HttpException } from "@nestjs/common";

@ApiTags('Booking')
@UseGuards(AuthGuard('jwt'))
@Controller('booking')
export class BookingController {
    constructor(
        private bookingService: BookingService
    ) { }

    @Get('getBookingByUserId/:user_id')
    getBookingByUserId(
        @Param('user_id') user_id: string
    ): Promise<BookingDto[] | HttpException> {
        return this.bookingService.getBookingByUserId(user_id)
    }

    @Get('getBooking')
    getBooking(): Promise<BookingDto[] | HttpException> {
        return this.bookingService.getBooking()
    }
    @Get('getBookingById/:booking_id')
    getBookingById(
        @Param('booking_id') booking_id: string
    ): Promise<HttpException> {
        return this.bookingService.getBookingById(booking_id)
    }

    @Post('postBooking/:room_id/:user_id')
    postBooking(
        @Param('room_id') room_id: string,
        @Param('user_id') user_id: string,
        @Body() input: BookingBody
    ): Promise<HttpException> {
        return this.bookingService.postBooking(input, room_id, user_id)
    }

    @Put('updateBooking/:booking_id')
    updateBooking(
        @Param('booking_id') booking_id: string,
        @Body() input: BookingBody
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