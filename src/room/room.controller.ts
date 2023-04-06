import { FileInterceptor } from '@nestjs/platform-express';
import { HttpException, UseGuards, UseInterceptors } from '@nestjs/common';
import { Controller } from '@nestjs/common/decorators/core/controller.decorator';
import {
  Delete,
  Get,
  Post,
  Put,
} from '@nestjs/common/decorators/http/request-mapping.decorator';
import {
  Body,
  Param,
  UploadedFile,
} from '@nestjs/common/decorators/http/route-params.decorator';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RoomService } from './room.service';
import { RoomDto, RoomDtoBody } from './roomDto/room.dto';
import { diskStorage } from 'multer';

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

  @Put('/updateRoomById')
  updateRoomById(
    @Body() body: RoomDtoBody,
  ): Promise<{ message: string; data: RoomDto[] }> {
    return this.roomService.updateRoomById(body);
  }

  @Delete('/deleteRoomById/:room_id')
  deleteRoomById(
    @Param('room_id') room_id: number,
  ): Promise<{ message: string; data: RoomDto[] }> {
    return this.roomService.deleteRoomById(room_id);
  }

  @UseInterceptors(
    FileInterceptor('fileUpdate', {
      storage: diskStorage({
        destination: process.cwd() + '/public/uploadImg',
        filename: (req, file, cb) => cb(null, Date.now() + file.originalname),
      }),
    }),
  )
  @Post('/uploadRoomImageById/:room_id')
  updateRoomImageById(
    @Param('room_id') room_id: number,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<{ message: string; data: Express.Multer.File }> {
    return this.roomService.uploadRoomImageById(room_id, file);
  }
}
