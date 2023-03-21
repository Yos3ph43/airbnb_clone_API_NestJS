import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class CommentService {
    constructor(
        private prisma: PrismaService
    ) { }

    async getComment(): Promise<any> {
        try {
            const data = await this.prisma.comment.findMany()
            return data
        } catch (error) {
            console.log(error);
            return new HttpException("Lỗi gì òi :((", 500)
        }
    }

    async getCommentByRoom(room_id): Promise<any> {
        try {
            const data = await this.prisma.comment.findMany({
                where: {
                    room_id: Number(room_id)
                }
            })
            return data
        } catch (error) {
            console.log(error);
            return new HttpException("Lỗi gì òi :((", 500)
        }
    }

    async postComment(input: any, roomId: string, userId: string) {
        try {
            const room_id = Number(roomId)
            const user_id = Number(userId)
            const comment_date = new Date()
            const data = { ...input, room_id, user_id, comment_date }
            await this.prisma.comment.create({ data })
            return new HttpException("Comment posted!", 200)
        } catch (error) {
            console.log(error);
            return new HttpException("Lỗi gì òi :((", 500)
        }
    }

    async updateComment(comment_id: string, input: any) {
        try {
            await this.prisma.comment.update({
                data: input,
                where:
                    { comment_id: Number(comment_id) }
            })
            return new HttpException("Comment updated!", 200)
        } catch (error) {
            console.log(error);
            return new HttpException("Lỗi gì òi :((", 500)
        }
    }

    async deleteComment(comment_id: string) {
        try {
            await this.prisma.comment.delete({
                where: {
                    comment_id: Number(comment_id)
                }
            })
            return new HttpException("Comment deleted!", 200)
        } catch (error) {
            console.log(error);
            return new HttpException("Lỗi gì òi :((", 500)
        }
    }
}
