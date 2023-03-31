import { ApiProperty } from "@nestjs/swagger"

export interface UserDto {
    user_id: number
    name: string
    email: string
    password: string
    phone: string
    birthday: string
    gender: string
    role: string
    avatar: string
}

export interface UserSearchPagination {
    pageIndex: number
    pageSize: number
    keyword: string
}

export class FileUploadDto {
    @ApiProperty({ type: 'string', format: 'binary' })
    fileUpload: any;
}

export class UserDtoBody {
    @ApiProperty({ description: 'user_id', type: Number })
    user_id: number
    @ApiProperty({ description: 'name', type: String })
    name: string
    @ApiProperty({ description: 'email', type: String })
    email: string
    @ApiProperty({ description: 'password', type: String })
    password: string
    @ApiProperty({ description: 'phone', type: String })
    phone: string
    @ApiProperty({ description: 'birthday', type: String })
    birthday: string
    @ApiProperty({ description: 'gender', type: String })
    gender: string
    @ApiProperty({ description: 'role', type: String })
    role: string
    @ApiProperty({ description: 'avatar', type: String })
    avatar: string
}

export class UserSearchPaginationBody {
    @ApiProperty({ description: 'pageIndex', type: Number })
    pageIndex: number
    @ApiProperty({ description: 'pageSize', type: Number })
    pageSize: number
    @ApiProperty({ description: 'keyword', type: String })
    keyword: string
}