import { ApiProperty } from '@nestjs/swagger';

export interface LocationDto {
  location_id: number;
  location_name: string;
  city: string;
  country: string;
  picture: string;
}

export class LocationDtoBody {
  @ApiProperty({ description: 'location_id', type: Number })
  location_id: number;
  @ApiProperty({ description: 'location_name', type: String })
  location_name: string;
  @ApiProperty({ description: 'city', type: String })
  city: string;
  @ApiProperty({ description: 'country', type: String })
  country: string;
  @ApiProperty({ description: 'picture', type: String })
  picture: string;
}

export class FileUploadDto {
    @ApiProperty({ type: 'string', format: 'binary' })
    fileUpload: any;
}
