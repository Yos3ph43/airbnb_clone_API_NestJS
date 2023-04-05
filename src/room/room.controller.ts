import { HttpException, UseGuards } from '@nestjs/common';
import { Controller } from '@nestjs/common/decorators/core/controller.decorator';
import {
  Get,
  Post,
  Put,
} from '@nestjs/common/decorators/http/request-mapping.decorator';
import {
  Body,
  Param,
} from '@nestjs/common/decorators/http/route-params.decorator';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RoomService } from './room.service';
import { RoomDto, RoomDtoBody } from './roomDto/room.dto';

@ApiTags('Room')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
@Controller('room')
export class RoomController {
  constructor(private roomService: RoomService) {}
  @Get('getRoom')
  getRoom(): Promise<RoomDto[] | HttpException> {
    return this.roomService.getRoom();
  }

  @Post('addRoom')
  addRoom(@Body() input: RoomDtoBody): Promise<RoomDto[] | HttpException> {
    return this.roomService.addRoom(input);
  }

  @Get('getRoomByLocationId/:location_id')
  getRoomByLocationId(
    @Param('location_id') location_id: string,
  ): Promise<RoomDto[] | HttpException> {
    return this.roomService.getRoomByLocationId(location_id);
  }

  /* Coder: Hoàng Hải
    Time: 05/04/2023 */
  @Get('/searchRoomById/:room_id')
  searchRoomById(
    @Param('room_id') room_id: number,
  ): Promise<{ message: string; data: RoomDto[] }> {
    return this.roomService.searchRoomById(room_id);
  }

  @Put('/updateRoomById/:room_id/:location_id')
  updateRoomById(
    @Param('room_id') room_id: number,
    @Param("location_id") location_id: number,
    @Body() body: RoomDtoBody,
  ): Promise<{ message: string; data: RoomDto[] }> {
    return this.roomService.updateRoomById(room_id, location_id, body);
  }

  @Put('/updateRoom/:room_id')
  updateRoom(

    @Body() body: RoomDtoBody,
  ): Promise<{ message: string; data: RoomDtoBody[] }> {
    return this.roomService.updateRoom( body);
  }
}
