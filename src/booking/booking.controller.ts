import { Controller, Get, Param } from "@nestjs/common/decorators";
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
}