import { Module } from '@nestjs/common';
import { CommentController } from './lib/comment.controller';
import { UserController } from './lib/user.controller';
import UserRepository from './dtos/user-repository';
import { PrismaUserRepository } from './dtos/prisma/prisma-user-repository';
import CommentRepository from './dtos/comment-repository';
import { PrismaCommentRepository } from './dtos/prisma/prisma-comment-repository';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [],
  controllers: [CommentController, UserController],
  providers: [PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository 
    },
    {
      provide: CommentRepository,
      useClass: PrismaCommentRepository
    }
  ],
})
export class AppModule { }
