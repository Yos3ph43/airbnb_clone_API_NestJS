import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
}
