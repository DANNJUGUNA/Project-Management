import { ConflictException, Injectable } from '@nestjs/common';
import { getPrismaClient } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { Role, User } from 'generated/prisma';
@Injectable()
export class UsersService {
  private prisma = getPrismaClient();
  async createUser(data: CreateUserDto): Promise<User> {
    try {
      const existingUser = await this.prisma.user.findUnique({
        where: { email: data.email },
      });
      if (existingUser) {
        throw new ConflictException(
          `User with email ${data.email} already exists`,
        );
      }
      const role = isValidRole(data.role) ? data.role : undefined;
      const user = await this.prisma.user.create({
        data: {
          name: data.name,
          phone: data.phone,
          email: data.email,
          password: data.password,
          role: role,
          createdAt: new Date(),
        },
      });
      return {
        id: user.id,
        name: user.name,
        phone: user.phone,
        email: user.email,
        password: user.password,
        role: user.role,
        createdAt: user.createdAt,
      };
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new Error(`Failed to create User ${error.message}` );
    }
  }
  async GetAllUsers()
}
function isValidRole(role: any): role is Role {
  return Object.values(Role).includes(role);
}
