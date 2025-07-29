
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookmarkDocument = Bookmark & Document;

@Schema()
export class Bookmark {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  url: string;
}

export const BookmarkSchema = SchemaFactory.createForClass(Bookmark);
