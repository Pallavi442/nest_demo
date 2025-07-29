import { Injectable } from '@nestjs/common';
import {UserDto} from './dto/user.dto'

@Injectable()
export class UserService {
    private users=[
        {
            id:1,
            name:"Pallavi",
            type:"normal"
        },
         {
            id:2,
            name:"kaira",
            type:"celebrity"
        }
        
    ]
    getAllUsers(){
        return this.users;
    }
    getUser(id:number){
        const user= this.users.find((user)=>user.id===id);
        if(!user){
            throw new Error("user Not Found")
        }
        return user
    }

    addUser(user:UserDto){
        const id = Date.now();
        this.users.push({
            id,
            ...user
        })
        return this.getUser(id)
    }
}
