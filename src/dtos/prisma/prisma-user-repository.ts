import { Injectable } from "@nestjs/common";
import UserRepository from "../user-repository";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(
    private prisma: PrismaService
  ) { }

  async createUser(name: string): Promise<void> {
    await this.prisma.user.create({
      data: { name: name }
    })
  }

  async findAllUsers(): Promise<any> {
    return await this.prisma.user.findMany()
  }

  async findOneUser(id: string): Promise<any> {
    return await this.prisma.user.findUnique({
      where: { id: id }
    })
  }

  async updateUser(id: string): Promise<void> {
    await this.prisma.user.update({
      where: { id: id },
      data: {}
    })
  }

  async removeUser(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id: id }
    })
  }
}