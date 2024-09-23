import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Category } from 'src/category/entities/category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Product {

  @PrimaryGeneratedColumn()
  @Field(()=>Int)
  id: number

  @Column()
  @Field()
  name: string

  @Column({nullable:true})
  @Field({nullable:true})
  description?: string

  @Column({type:'int'})
  @Field(()=>Int)
  categoryId: number

  @ManyToOne(()=>Category,(category)=>category.products)
  @Field(()=>Category)
  category: Category

}
