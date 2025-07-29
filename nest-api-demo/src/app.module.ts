// app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [
    // Load environment variables
    ConfigModule.forRoot({ isGlobal: true }),

    // Use ConfigService to inject Mongo URI
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI', { infer: true }),
      }),
      inject: [ConfigService],
    }),

    // Your feature modules
    UserModule,
    AuthModule,
    UsersModule,
    BookmarkModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
