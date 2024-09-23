import { Inject, Injectable } from '@nestjs/common';
import { CreateDesignInput } from './dto/create-design.input';
import { UpdateDesignInput } from './dto/update-design.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Design } from './entities/design.entity';
import { Repository } from 'typeorm';
import { ProductsService } from 'src/products/products.service';
import { Product } from 'src/products/entities/product.entity';
import { AwsService } from 'src/aws/aws.service';
import { Type } from 'class-transformer';
import { CreateSignedUrlInput } from 'src/aws/dto/create-signed-url.input';
import { randomUUID } from 'crypto';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class DesignsService {

  constructor(
    @InjectRepository(Design) private readonly designRepository: Repository<Design>,

    private readonly productsService: ProductsService,
    private readonly usersService: UsersService,
    private readonly awsService: AwsService

  ){}


  create(createDesignInput: CreateDesignInput) {
    const newDesign = this.designRepository.create(createDesignInput)
    return this.designRepository.save(newDesign)
  }

  findAll() {
    return this.designRepository.find();
  }

  findOne(id: number) {
    return this.designRepository.findOne({
      where:{
        id
      }
    })
  }

  update(id: number, updateDesignInput: UpdateDesignInput) {
    return `This action updates a #${id} design`;
  }

  remove(id: number) {
    return `This action removes a #${id} design`;
  }


  getProduct(id:number):Promise<Product> {
    return this.productsService.findOne(id)
  }

  getDesigner(id:number):Promise<User> {
    return this.usersService.findOne(id)
  }


  async getSignedUrls() {

    const uuid = randomUUID()

    const imageSignedUrl = await this.awsService.getSignedUrl({
      ACL:'public-read',
      Bucket:'lagaleria.digital',
      ContentType:'image/webp',
      operation:'putObject',
      Key:`designs/${uuid}.webp`,
      Expires:60*5
    })

    const fileSignedUrl = await this.awsService.getSignedUrl({
      ACL:'private',
      Bucket:'lagaleria.digital',
      ContentType:'application/zip',
      operation:'putObject',
      Key:`designs/${uuid}.zip`,
      Expires:60*5
    })

    const publicImageUrl =  `https://lagaleria.digital.s3.us-east-2.amazonaws.com/${uuid}.webp`

    return [ publicImageUrl, imageSignedUrl, fileSignedUrl]

  }


}
