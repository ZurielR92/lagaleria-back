import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateCategoryInput {
  
  @MinLength(3)
  @MaxLength(100)
  @IsNotEmpty()
  @Field()
  name: string

  @MaxLength(400)
  @IsOptional()
  @Field({nullable:true})
  description: string

}
