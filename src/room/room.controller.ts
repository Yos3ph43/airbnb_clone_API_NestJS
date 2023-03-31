import { HttpException, UseGuards } from "@nestjs/common";
import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
import { Get, Post } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { Body, Param } from "@nestjs/common/decorators/http/route-params.decorator";
import { AuthGuard } from "@nestjs/passport";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { RoomService } from "./room.service";
import { RoomDto, RoomDtoBody } from "./roomDto/room.dto";

@ApiTags('Room')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
@Controller('room')
export class RoomController {
    constructor(
        private roomService: RoomService
    ) { }
    @Get('getRoom')
    getRoom(): Promise<RoomDto[] | HttpException> {
        return this.roomService.getRoom()
    }

    @Post('addRoom')
    addRoom(
        @Body() input: RoomDtoBody
    ): Promise<RoomDto[] | HttpException> {
        return this.roomService.addRoom(input)
    }

    @Get('getRoomByLocationId/:location_id')
    getRoomByLocationId(
        @Param('location_id') location_id: string): Promise<RoomDto[] | HttpException> {
        return this.roomService.getRoomByLocationId(location_id)
    }
}