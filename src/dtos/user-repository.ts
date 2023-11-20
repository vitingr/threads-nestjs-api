abstract class UserRepository {
  abstract createUser(
    name: string
  ): Promise<void>

  abstract findAllUsers(): Promise<any>

  abstract findOneUser(
    id: string
  ): Promise<any>

  abstract updateUser(
    id: string
  ): Promise<void>

  abstract removeUser(
    id: string
  ): Promise<void>
}

export default UserRepository