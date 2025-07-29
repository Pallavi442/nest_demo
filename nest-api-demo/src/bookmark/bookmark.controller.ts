// bookmark/bookmark.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { Bookmark } from './schemas/bookmark.schema';

@Controller('bookmarks')
export class BookmarkController {
  constructor(private readonly bookmarkService: BookmarkService) {}

  @Post()
  async create(@Body() dto: CreateBookmarkDto): Promise<Bookmark> {
    return this.bookmarkService.create(dto);
  }

  @Get()
  async findAll(): Promise<Bookmark[]> {
    return this.bookmarkService.findAll();
  }
}
