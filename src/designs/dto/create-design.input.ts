import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsOptional, IsUrl, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateDesignInput {s



  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(100)
  @Field()
  description: string

  @IsNotEmpty()
  @MinLength(3)
  @Field()
  tags: string

  @IsNotEmpty()
  @IsUrl()
  @Field()
  image: string

  @IsNotEmpty()
  @IsUrl()
  @Field()
  file: string

  @IsOptional()
  @Field(()=>Boolean, {nullable:true})
  isEditable: boolean

  @IsOptional()
  @Field(()=>Int, {nullable:true})
  collectionId: number

  @IsOptional()
  @IsInt()
  @Field(()=>Int, {nullable:true})
  designerId: number
  
  @IsInt()
  @Field(()=>Int)
  productId: number
}
