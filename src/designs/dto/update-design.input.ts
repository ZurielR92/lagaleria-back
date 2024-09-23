import { CreateDesignInput } from './create-design.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDesignInput extends PartialType(CreateDesignInput) {
  @Field(() => Int)
  id: number;
}
