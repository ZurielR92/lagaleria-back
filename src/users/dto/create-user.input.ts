import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsHash, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  @Field()
  name: string

  @IsEmail()
  @Field()
  email: string

  @IsNotEmpty()
  @MinLength(6)
  @Field()
  password: string
  

}
