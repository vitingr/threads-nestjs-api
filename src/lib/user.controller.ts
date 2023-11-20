import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import UserRepository from 'src/dtos/user-repository';
import { createUser, removeUser, updateUser } from 'src/repositories/user';

@Controller('user')
export class UserController {
  constructor(
    private userRepository: UserRepository
  ) { }

  @Post("create")
  async createUser(@Body() body: createUser) {
    const {name} = body
    try {
      await this.userRepository.createUser(name)
    } catch (error) {
      console.log(error)
    }
  }

  @Get("")
  async findAllUsers() {
    try {
      const response = await this.userRepository.findAllUsers()
      return JSON.stringify(response)
    } catch (error) {
      console.log(error)
    }
  }

  @Get(":id")
  async findOneUser(@Param("id") id: string) {
    try {
      const response = await this.userRepository.findOneUser(id)
      return JSON.stringify(response)
    } catch (error) {
      console.log(error)
    }
  }

  @Patch("update") 
  async updateUser(@Body() body: updateUser) {
    const {id} = body
    try {
      await this.userRepository.updateUser(id)
    } catch (error) {
      console.log(error)
    }
  }

  @Delete("delete")
  async deleteUser(@Body() body: removeUser) {
    const {id} = body
    try {
      await this.userRepository.removeUser(id)
    } catch (error) {
      console.log(error)
    }
  }
}
