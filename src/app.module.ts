import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { BookingModule } from './booking/booking.module';
import { RoomModule } from './room/room.module';
import { LocationModule } from './location/location.module';



@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UserModule, AuthModule, CommentModule, BookingModule, UserModule, RoomModule, LocationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
