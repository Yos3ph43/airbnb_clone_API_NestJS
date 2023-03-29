import { ApiProperty } from '@nestjs/swagger'

export interface CommentDto {
    comment_id: number,
    user_id: number,
    room_id: number,
    comment_date: Date,
    content: string,
    star_rating: number
}
export class PostCommentBody {
    @ApiProperty({ description: "content", type: String })
    content: string
    @ApiProperty({ description: "star_rating", type: Number })
    star_rating: number
}
