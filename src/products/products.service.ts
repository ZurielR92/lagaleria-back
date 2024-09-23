import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CategoryService } from 'src/category/category.service';

@Injectable()
export class ProductsService {

  constructor(

    @InjectRepository(Product) private productRepository: Repository<Product>,
    private categoryService:CategoryService

  ) {

  }

  create(createProductInput: CreateProductInput) {
    const newProduct = this.productRepository.create(createProductInput)
    return this.productRepository.save(newProduct)
  }

  findAll() {
    return this.productRepository.find()
  }

  findOne(id: number) {
    return this.productRepository.findOne({
      where:{
        id
      }
    })
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return this.productRepository.update(id,updateProductInput)
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }

  getCategory(id:number) {
    return this.categoryService.findOne(id)
  }
}
