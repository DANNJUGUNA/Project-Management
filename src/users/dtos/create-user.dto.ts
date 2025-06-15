import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
export class CreateUserDto {
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name cannot be empty' })
  @MaxLength(60, {
    message: 'Name is expexted to have a maxmum number of 60 characters',
  })
  @MinLength(3, {
    message: 'Name is expexted to have a minmum number of 3 characters',
  })
  name: string;
  @IsString({ message: 'Phone must be a string' })
  @IsNotEmpty({ message: 'Phone cannot be empty' })
  @MaxLength(10, {
    message: 'Phone is expexted to have a maxmum number of 10 characters',
  })
  @MinLength(10, {
    message: 'Phone is expexted to have a minmum number of 10 characters',
  })
  phone: string;
  @IsEmail({}, { message: 'Email must be an email' })
  @IsNotEmpty({ message: 'email cannot be empty' })
  @MaxLength(50, {
    message: 'email is expexted to have a maxmum number of 50 characters',
  })
  @MinLength(20, {
    message: 'Email is expexted to have a minmum number of 20 characters',
  })
  email: string;
  @IsString({ message: 'Password must be an String' })
  @IsNotEmpty({ message: 'Password cannot be empty' })
  @MaxLength(30, {
    message: 'Password is expexted to have a maxmum number of 30 characters',
  })
  @MinLength(8, {
    message: 'Password is expexted to have a minmum number of 8 characters',
  })
  password: string;
  role: string;
}
