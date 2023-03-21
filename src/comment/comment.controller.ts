import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
    constructor(private commentService: CommentService) { }

    @Get('getComment')
    getComment(): Promise<any> {
        return this.commentService.getComment()
    }
    @Get('getCommentByRoom/:room_id')
    getCommentByRoom(
        @Param('room_id') room_id: string
    ): Promise<any> {
        return this.commentService.getCommentByRoom(room_id)
    }

    @Post('postComment/:room_id/:user_id')
    postComment(
        @Param('room_id') room_id: string,
        @Param('user_id') user_id: string,
        @Body() input: any
    ) {
        return this.commentService.postComment(input, room_id, user_id)
    }

    @Put('updateComment/:comment_id')
    updateComment(
        @Param('comment_id') comment_id: string,
        @Body() input: any
    ) {
        return this.commentService.updateComment(comment_id, input)
    }

    @Delete('deleteComment/:comment_id')
    deleteComment(
        @Param('comment_id') comment_id: string,
    ) {
        return this.commentService.deleteComment(comment_id)
    }
}
