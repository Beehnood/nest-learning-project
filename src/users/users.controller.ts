import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly UserService: UsersService) {}

    
    @Get()
    findAll() {
         this.UserService.findAll();
    }
}
