import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './userDTO';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Post()
    createUser(@Body() body: CreateUserDTO) {

        try {

            return this.userService.createUser(body)

        } catch (error) {
            return error.message
        }

    }
}
