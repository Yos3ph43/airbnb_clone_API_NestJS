import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
import { Get, Post } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { Body, Param } from "@nestjs/common/decorators/http/route-params.decorator";
import { RoomService } from "./room.service";
import { RoomDto } from "./roomDto/room.dto";

@Controller('room')
export class RoomController {
    constructor(
        private roomService: RoomService
    ) { }
    @Get('getRoom')
    getRoom(): Promise<RoomDto> {
        return this.roomService.getRoom()
    }

    @Post('addRoom')
    addRoom(
        @Body() input: RoomDto
    ): Promise<RoomDto[]> {
        return this.roomService.addRoom(input)
    }

    @Get('getRoomByLocationId/:location_id')
    getRoomByLocationId(
        @Param('location_id') location_id: string): Promise<RoomDto[]> {
        return this.roomService.getRoomByLocationId(location_id)
    }
}