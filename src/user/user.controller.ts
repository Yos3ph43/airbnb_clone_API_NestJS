import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { FileUploadDto, UserDto, UserDtoBody, UserSearchPagination, UserSearchPaginationBody } from './dto/user.dto';
import { UserService } from './user.service';

import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { HttpException } from '@nestjs/common';

@ApiTags('User')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
@Controller('user')
export class UserController {
    constructor(
        private userService: UserService,
    ) { }

    @Get('getUser')
    getUser(): Promise<UserDto[] | HttpException> {
        return this.userService.getUser()
    }

    @Post('addUser')
    addUser(@Body() input: UserDtoBody): Promise<UserDto[] | HttpException> {
        return this.userService.addUser(input)
    }

    @Delete('deleteUser/:user_id')
    deleteUser(@Param('user_id') user_id: string): Promise<UserDto[] | HttpException> {
        return this.userService.deleteUser(user_id)
    }

    @Get('getSearchPagination')
    getSearchPagination(@Body() input: UserSearchPaginationBody): Promise<UserSearchPagination[] | HttpException> {
        return this.userService.getSearchPagination(input)
    }

    @Get('getUserById/:user_id')
    getUserById(@Param('user_id') user_id: string): Promise<UserDto[] | HttpException> {
        return this.userService.getUserById(user_id)
    }

    @Put('updateUser/:user_id')
    updateUser(
        @Param('user_id') user_id: string,
        @Body() input: UserDtoBody
    ): Promise<UserDto[] | HttpException> {
        return this.userService.updateUser(user_id, input)
    }

    @Get('searchUser/:user_name')
    searchUser(
        @Param('user_name') user_name: string): Promise<UserDto[] | HttpException> {
        return this.userService.searchUser(user_name)
    }
    //uploadAvatar
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: "File",
        type: FileUploadDto
    })
    @UseInterceptors(FileInterceptor('fileUpload', {
        storage: diskStorage({
            destination: process.cwd() + "/public/uploadImg",
            filename: (req, file, cb) => {
                const newFileName = Date.now() + extname(file.originalname);
                cb(null, newFileName);
            }
        })
    }))
    @Post('/uploadAvatar/:user_id')
    uploadAvatar(
        @Param('user_id') user_id: string,
        @UploadedFile() file: Express.Multer.File
    ): Promise<Express.Multer.File | HttpException> {

        return this.userService.updateAvatar(user_id, file)

    }
}


