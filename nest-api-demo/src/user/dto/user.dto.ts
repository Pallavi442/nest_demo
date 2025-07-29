import {IsString,MinLength} from 'class-validator'
import {Transform} from 'class-transformer'
export class UserDto{
    @Transform(({value})=>{
        // console.log("value",value)
        if(value ==='Pallavi') return 'Pallavi Patil'
        return value
    })
    @MinLength(3)  
    @IsString()    
    name:string;
    type:string;
}