import { Body, Controller, Delete, Get, HttpException, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger/dist/decorators';
import { CommentService } from './comment.service';
import { CommentDto, PostCommentBody } from './dto/comment.dto';

@ApiTags('Comment')
@UseGuards(AuthGuard('jwt'))
@Controller('comment')
export class CommentController {
    constructor(private commentService: CommentService) { }

    @Get('getComment')
    getComment(): Promise<CommentDto[] | HttpException> {
        return this.commentService.getComment()
    }
    @Get('getCommentByRoom/:room_id')
    getCommentByRoom(
        @Param('room_id') room_id: string
    ): Promise<CommentDto[] | HttpException> {
        return this.commentService.getCommentByRoom(room_id)
    }

    @Post('postComment/:room_id/:user_id')
    postComment(
        @Param('room_id') room_id: string,
        @Param('user_id') user_id: string,
        @Body() input: PostCommentBody
    ): Promise<HttpException> {
        return this.commentService.postComment(input, room_id, user_id)
    }

    @Put('updateComment/:comment_id')
    updateComment(
        @Param('comment_id') comment_id: string,
        @Body() input: PostCommentBody
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
