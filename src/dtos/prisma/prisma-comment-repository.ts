import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import CommentRepository from "../comment-repository";

@Injectable()
export class PrismaCommentRepository implements CommentRepository {
  constructor(
    private prisma: PrismaService
  ) { }

  async createComment(ownerId: string, text: string): Promise<void> {
    await this.prisma.comment.create({
      data: {
        ownerId: ownerId,
        text: text
      }
    })
  }

  async findAllComment(): Promise<any> {
    return await this.prisma.comment.findMany()
  }

  async findOneComment(id: string): Promise<any> {
    return await this.prisma.comment.findUnique({
      where: { id: id }
    })
  }

  async updateComment(id: string): Promise<void> {
    await this.prisma.comment.update({
      where: { id: id },
      data: {}
    })
  }

  async removeComment(id: string): Promise<void> {
    await this.prisma.comment.delete({
      where: { id: id }
    })
  }
}