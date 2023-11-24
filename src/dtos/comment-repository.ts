abstract class CommentRepository {
  abstract createComment(
    ownerId: string,
    ownerName: string,
    text: string
  ): Promise<void>

  abstract findAllComment(): Promise<void>

  abstract findOneComment(
    id: string
  ): Promise<any>

  abstract updateComment(
    id: string
  ): Promise<any>

  abstract removeComment(
    id: string
  ): Promise<void>
}

export default CommentRepository