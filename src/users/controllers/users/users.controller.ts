import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { request, response } from 'express';
import { Http2ServerRequest } from 'http2';
import { createUserDTO } from 'src/users/DTOS/CreateUser.dto';

@Controller('users')
export class UsersController {

    @Get()
    getUsers(@Query('sortDesc', ParseBoolPipe) sortDesc: boolean) {
        console.log(sortDesc)
        return [{ username: "Ekrem", email: "ekrem.bler@hotmail.com"}]
    }

    @Get("posts")
    getUserPosts() {
        return [
            { 
                id: 1,
                username: "Ekrem", 
                email: "ekrem.bler@hotmail.com",
                posts: ["post1", "post2", "post2"]
            }
        ]
    }

    // @Post()
    // createUser(@Req() request: Request, @Res() response: Response) {
    //     console.log(request.body)
    //     return response;
    // }

    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData: createUserDTO) {
        console.log(userData);
        return {};
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        console.log(id);
        return { id };
    }
}
