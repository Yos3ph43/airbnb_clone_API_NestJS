import { Controller, Get } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

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
    addUser(): Promise<UserDto[]> {
        return this.userService.addUser()
    }
}
