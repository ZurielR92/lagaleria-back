import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { DesignsService } from './designs.service';
import { Design } from './entities/design.entity';
import { CreateDesignInput } from './dto/create-design.input';
import { UpdateDesignInput } from './dto/update-design.input';
import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';

@Resolver(() => Design)
export class DesignsResolver {
  constructor(private readonly designsService: DesignsService) {}

  @Mutation(() => Design)
  createDesign(@Args('createDesignInput') createDesignInput: CreateDesignInput) {
    return this.designsService.create(createDesignInput);
  }

  @Query(() => [Design], { name: 'designs' })
  findAll() {
    return this.designsService.findAll();
  }

  @Query(()=>[String], { name:'createUploadUrl'})
  getImageUploadUrl() {
    return this.designsService.getSignedUrls();
  }

  

  @Query(() => Design, { name: 'design' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.designsService.findOne(id);
  }

  @Mutation(() => Design)
  updateDesign(@Args('updateDesignInput') updateDesignInput: UpdateDesignInput) {
    return this.designsService.update(updateDesignInput.id, updateDesignInput);
  }

  @Mutation(() => Design)
  removeDesign(@Args('id', { type: () => Int }) id: number) {
    return this.designsService.remove(id);
  }

  @ResolveField(()=>Product)
  product(@Parent() design:Design):Promise<Product> {
    return this.designsService.getProduct(design.productId)
  }

  @ResolveField(()=>User)
  designer(@Parent() design:Design):Promise<User> {
    return this.designsService.getDesigner(design.designerId)
  }
}
