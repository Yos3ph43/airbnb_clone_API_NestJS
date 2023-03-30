import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common/decorators';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { UserSearchPagination } from './dto/userSearchPagination.dto'
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
@Controller('user')
export class UserController {
    constructor(
        private userService: UserService,
    ) { }

    @Get('getUser')
    getUser(): Promise<UserDto[]> {
        return this.userService.getUser()
    }

    @Post('addUser')
    addUser(@Body() input: UserDto): Promise<UserDto[]> {
        return this.userService.addUser(input)
    }

    @Delete('deleteUser/:user_id')
    deleteUser(@Param('user_id') user_id: string): Promise<UserDto[]> {
        return this.userService.deleteUser(user_id)
    }

    @Get('getSearchPagination')
    getSearchPagination(@Body() input: UserSearchPagination): Promise<UserSearchPagination[]> {
        return this.userService.getSearchPagination(input)
    }

    @Get('getUserById/:user_id')
    getUserById(@Param('user_id') user_id: string): Promise<UserDto[]> {
        return this.userService.getUserById(user_id)
    }

    @Put('updateUser/:user_id')
    updateUser(
        @Param('user_id') user_id: string,
        @Body() input: UserDto
    ): Promise<UserDto[]> {
        return this.userService.updateUser(user_id, input)
    }

    @Get('searchUser/:user_name')
    searchUser(
        @Param('user_name') user_name: string): Promise<UserDto[]> {
        return this.userService.searchUser(user_name)
    }
    //uploadAvatar
    // @Post('uploadAvatar/:user_id')
    // uploadAvatar(
    //     @Param('user_id') user_id: string): Promise<UserDto[]> {
    //     return this.userService.updateAvatar(user_id)
    // }
    @Post('/upload')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './upload',
            filename: (req, file, cb) => {
                const newfileName = Date.now() + extname(file.originalname);
                cb(null, newfileName);
            }
        })
    }))
    uploadAvatar(
        // @Param('user_id') user_id: string,
        // @Body() input: UserDto,
        @UploadedFile() file: Express.Multer.File
    ) {
        try {
            // console.log(file);
            console.log('file', file);


        } catch (error) {
            console.log(error);

        }
        // return { input, file: file.buffer.toString() }
    }
}


