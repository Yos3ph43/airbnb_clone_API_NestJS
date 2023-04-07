import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { LocationService } from './location.service';
import {
  LocationDto,
  LocationDtoBody,
  FileUploadDto,
} from './dto/location.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Location')
@Controller('location')
export class LocationController {
  constructor(private locationService: LocationService) {}

  @Get('/getLocation')
  getLocation(): Promise<{ message: string; data: LocationDto[] }> {
    return this.locationService.getLocation();
  }

  @Post('/postLocation')
  postLocation(
    @Body()
    file: LocationDtoBody,
  ): Promise<{ message: string; data: LocationDto[] }> {
    return this.locationService.postLocation(file);
  }

  @Get('/searchLocationById/:location_id')
  searchLocationById(
    @Param('location_id') location_id: number,
  ): Promise<{ message: string; data: LocationDto[] }> {
    return this.locationService.searchLocationById(location_id);
  }

  @Put('/updateLocationById')
  updateLocationById(
    @Body() body: LocationDtoBody,
  ): Promise<{ message: string; data: LocationDto[] }> {
    return this.locationService.updateLocationById(body);
  }

  @Delete('/deleteLocationbyId/:location_id')
  deleteLocationbyId(
    @Param('location_id') location_id: number,
  ): Promise<{ message: string; data: LocationDto[] }> {
    return this.locationService.deleteLocationbyId(location_id);
  }

  @UseInterceptors(
    FileInterceptor('fileUpload', {
      storage: diskStorage({
        destination: process.cwd() + '/public/uploadImg',
        filename: (req, file, cb) => cb(null, Date.now() + file.originalname),
      }),
    }),
  )
  @Post('/uploadLocationPictureById/:location_id')
  uploadLocationPictureById(
    @Param('location_id') location_id: number,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<{ message: string; data: Express.Multer.File }> {
    return this.locationService.uploadLocationPictureById(location_id, file);
  }
}
