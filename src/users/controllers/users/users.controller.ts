import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Query('sortBy') sortBy: string) {
    console.log(sortBy);
    return [
      {
        username: 'John Doe',
        email: 'omogod@email',
      },
    ];
  }

  @Get('posts')
  getPosts() {
    return [
      {
        name: 'John Doe',
        email: 'omogod@email',
        title: 'My first post',
        content: 'This is my first post',
        posts: [
          {
            name: 'John Doe',
            email: 'omogod@email',
          },
          {
            name: 'John Doe',
            email: 'omogod@email',
          },
        ],
      },
    ];
  }

  @Get('posts/comments')
  getUsersPostsComments() {
    return [
      {
        id: 1,
        title: 'post 1',
        comments: [],
      },
    ];
  }

  @Post('create')
  CreateUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return userData;
  }

  @Get(':id/:postId')
  getUsertById(@Param('id') id: string, @Param('postId') postId: string) {
    console.log(id);
    return { id, postId };
  }

  @Get(':id/:postId')
  getUserById(@Param('id') id: string, @Param('postId') postId: string) {
    console.log(id);
    return { id, postId };
  }
}
