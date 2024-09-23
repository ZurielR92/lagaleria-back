import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {

  @PrimaryGeneratedColumn()
  @Field(()=>Int)
  id: number

  @Column()
  @Field()
  name: string

  @Column()
  @Field()
  email: string

  @Column()
  @Field({nullable:true})
  password: string

  @Column({default:'customer'})
  @Field()
  role: string

  @Column({default:10})
  @Field(()=>Int)
  credits: number

  @CreateDateColumn()
  @Field(()=>Date)
  createdAt: Date

  @UpdateDateColumn()
  @Field(()=>Date)
  updatedAt: Date
}
