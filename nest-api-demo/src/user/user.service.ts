import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './Schemas/user.schemas';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUser(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async addUser(dto: UserDto): Promise<User> {
    const newUser = new this.userModel(dto);
    return newUser.save();
  }
}
