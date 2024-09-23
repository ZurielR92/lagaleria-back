import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(Category) private readonly categoryRepository: Repository<Category>
  ) {}

  async create(createCategoryInput: CreateCategoryInput) {
    const exist = await this.categoryRepository.findOne({
      where:{
        name:createCategoryInput.name
      }
    })
    if(exist) return new ConflictException()
    const newCategory  = this.categoryRepository.create(createCategoryInput);
    return this.categoryRepository.save(newCategory);
  }

  findAll() {
    return this.categoryRepository.find();
  }

  findOne(id: number) {
    return this.categoryRepository.findOne({
      where:{
        id
      }
    })
  }

  update(id: number, updateCategoryInput: UpdateCategoryInput) {
    return this.categoryRepository.update(id,updateCategoryInput);
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
