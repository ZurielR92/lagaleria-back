import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Design {

  @PrimaryGeneratedColumn()
  @Field(()=>Int)
  id: number

  @Column()
  @Field()
  description: string

  @Column()
  @Field()
  tags: string

  @Column()
  @Field()
  image: string

  @Column()
  @Field()
  file: string

  @Column({ type:'boolean', default:false })
  @Field()
  isEditable: boolean

  @Field({nullable:true})
  collectionId?: number

  @Column({ type:'int' })
  @Field(()=>Int)
  productId: number

  @Field(()=>Product)
  product?: Product

  @Column({type:'int', default:1})
  @Field(()=>Int)
  designerId: number

  @Field(()=>User)
  designer?: User

  @CreateDateColumn()
  @Field()
  createdAt: Date

  @Column({type:'tsvector', nullable:true})
  searchVector: string

}
