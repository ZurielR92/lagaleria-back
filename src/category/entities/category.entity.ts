import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from 'src/products/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Category {

  @PrimaryGeneratedColumn()
  @Field(()=>Int)
  id: number

  @Column()
  @Field()
  name: string

  @Column({nullable:true})
  @Field({ nullable:true })
  description?: string

  @OneToMany(()=>Product, (product)=>product.category)
  @Field(()=>[Product])
  products: Product[]
}
