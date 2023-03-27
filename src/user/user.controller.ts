import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common/decorators';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { UserSearchPagination } from './dto/userSearchPagination.dto'
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
}
