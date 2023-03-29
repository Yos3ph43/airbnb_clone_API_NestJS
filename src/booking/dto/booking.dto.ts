import { ApiProperty } from '@nestjs/swagger'

export interface BookingDto {
    booking_id: number,
    user_id: number,
    room_id: number,
    checkin: Date,
    checkout: Date,
    guests: number
}

export class BookingBody {
    @ApiProperty({ description: "checkin", type: Date })
    checkin: Date
    @ApiProperty({ description: "checkout", type: Date })
    checkout: Date
    @ApiProperty({ description: "guests", type: Number })
    guests: number
}
