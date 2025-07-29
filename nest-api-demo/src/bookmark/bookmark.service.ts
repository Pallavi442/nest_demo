// bookmark/bookmark.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Bookmark, BookmarkDocument } from './schemas/bookmark.schema';
import { Model } from 'mongoose';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';

@Injectable()
export class BookmarkService {
  constructor(
    @InjectModel(Bookmark.name) private bookmarkModel: Model<BookmarkDocument>,
  ) {}

  async create(createBookmarkDto: CreateBookmarkDto): Promise<Bookmark> {
    const newBookmark = new this.bookmarkModel(createBookmarkDto);
    return newBookmark.save();
  }

  async findAll(): Promise<Bookmark[]> {
    return this.bookmarkModel.find().exec();
  }
}
