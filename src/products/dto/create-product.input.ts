import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateProductInput {

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  @Field()
  name: string

  @IsOptional()
  @MaxLength(400)
  @Field({nullable:true})
  description: string

  @IsInt()
  @Field(()=>Int)
  categoryId: number

}
