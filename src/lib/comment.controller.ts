import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import CommentRepository from 'src/dtos/comment-repository';
import { createComment, removeComment, updateComment } from 'src/repositories/comment';

@Controller('comment')
export class CommentController {
  constructor(
    private commentRepository: CommentRepository
  ) { }

  @Post("create")
  async createComment(@Body() body: createComment) {
    const {ownerId, text} = body
    try {
      await this.commentRepository.createComment(ownerId, text)
    } catch (error) {
      console.log(error)
    }
  }

  @Get("")
  async findAllComment() {
    try {
      const response = await this.commentRepository.findAllComment()
      return JSON.stringify(response)
    } catch (error) {
      console.log(error)
    }
  }

  @Get(":id")
  async findOneComment(@Param("id") id: string) {
    try {
      const response = await this.commentRepository.findOneComment(id)
      return JSON.stringify(response)
    } catch (error) {
      console.log(error)
    }
  }

  @Patch("update")
  async updateComment(@Body() body: updateComment) {
    const {id} = body
    try {
      await this.commentRepository.updateComment(id)
    } catch (error) {
      console.log(error)
    }
  }

  @Delete("delete")
  async deleteComment(@Body() body: removeComment) {
    const {id} = body
    try {
      await this.commentRepository.removeComment(id)
    } catch (error) {
      console.log(error)
    }
  }
}
