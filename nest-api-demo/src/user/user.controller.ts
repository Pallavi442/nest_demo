import { Controller,Get,Param,NotFoundException,Post,Body, ParseIntPipe,ValidationPipe, UseGuards } from '@nestjs/common';
import  {UserService} from './user.service'
import {UserDto} from './dto/user.dto'
import { FirewallGuard } from 'src/firewall/firewall.guard';
// import {FirewallGuard} from '../../src/firewall/firewall.guard'

@Controller('user')
export class UserController {
  //Dependency Injection
  constructor(private readonly userService:UserService){}


    @Get()
    getAllUsers(){
        return this.userService.getAllUsers()
    }

    @Get(':id')
    getUser(@Param('id',ParseIntPipe) id:number){
      
         try {
              return this.userService.getUser(id)
        }
        catch (error) {
            throw new NotFoundException(error.message)
        }
    }


    //Post Request
    @Post()
     @UseGuards(FirewallGuard)
    addUser(@Body(new ValidationPipe({transform:true})) user:UserDto){
        return this.userService.addUser(user)
    }

}
