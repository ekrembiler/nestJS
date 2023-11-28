import { IsEmail, IsNotEmpty, isNotEmpty, isNotEmptyObject } from "class-validator";

export class createUserDTO { 
    @IsNotEmpty()
    username: string;
    @IsEmail()
    email: string;
}