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
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { LocationService } from './location.service';
import {
  LocationDto,
  LocationDtoBody,
  PostDtoBody,
  FileUploadDto,
} from './dto/location.dto';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Location')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
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
    input: PostDtoBody,
  ): Promise<{ message: string; data: PostDtoBody[] }> {
    return this.locationService.postLocation(input);
  }

  @Get('/searchLocationPagination')
  searchLocationPagination(
    @Query('page') page: number,
  ): Promise<{ message: string; data: LocationDto[] }> {
    return this.locationService.searchLocationPagination(page);
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

  @ApiConsumes('multipart/form-data')
  @ApiBody({ description: 'File', type: FileUploadDto })
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
