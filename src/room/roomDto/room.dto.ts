import { ApiProperty } from "@nestjs/swagger"

export interface RoomDto {
    room_id: number
    location_id: number
    room_name: string
    guests: number
    bedrooms: number
    beds: number
    bathrooms: number
    description: string
    price: number
    washer: number
    iron: number
    television: number
    air_con: number
    wifi: number
    kitchen: number
    parking_lot: number
    pool: number
    image: string
}
export class RoomDtoBody {
    @ApiProperty({ description: 'room_id', type: Number })
    room_id: number
    @ApiProperty({ description: 'location_id', type: Number })
    location_id: number
    @ApiProperty({ description: 'room_name', type: String })
    room_name: string
    @ApiProperty({ description: 'guests', type: Number })
    guests: number
    @ApiProperty({ description: 'bedrooms', type: Number })
    bedrooms: number
    @ApiProperty({ description: 'beds', type: Number })
    beds: number
    @ApiProperty({ description: 'bathrooms', type: Number })
    bathrooms: number
    @ApiProperty({ description: 'description', type: String })
    description: string
    @ApiProperty({ description: 'price', type: Number })
    price: number
    @ApiProperty({ description: 'washer', type: Number })
    washer: number
    @ApiProperty({ description: 'iron', type: Number })
    iron: number
    @ApiProperty({ description: 'television', type: Number })
    television: number
    @ApiProperty({ description: 'air_con', type: Number })
    air_con: number
    @ApiProperty({ description: 'wifi', type: Number })
    wifi: number
    @ApiProperty({ description: 'kitchen', type: Number })
    kitchen: number
    @ApiProperty({ description: 'parking_lot', type: Number })
    parking_lot: number
    @ApiProperty({ description: 'pool', type: Number })
    pool: number
    @ApiProperty({ description: 'image', type: String })
    image: string
}