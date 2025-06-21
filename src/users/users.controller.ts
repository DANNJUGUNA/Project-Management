import { ApiResponse } from './../shared/api-response.interface';
import { UsersService } from './users.service';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from 'generated/prisma';

@Controller('users')
export class UsersController {
  constructor(private readonly usersservice: UsersService) {}
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() data: CreateUserDto): Promise<ApiResponse<User>> {
    try {
      const user = await this.usersservice.createUser(data);
      return {
        sucess: true,
        message: 'user regisitered successfuly',
        data: user,
      };
    } catch (error) {
      return {
        sucess: false,
        message: 'failed to regester user',
        error: error instanceof Error ? error.message : 'unknown error',
      };
    }
  }
}
