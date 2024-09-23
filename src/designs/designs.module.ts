import { Module } from '@nestjs/common';
import { DesignsService } from './designs.service';
import { DesignsResolver } from './designs.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Design } from './entities/design.entity';
import { ProductsService } from 'src/products/products.service';
import { ProductsModule } from 'src/products/products.module';
import { AwsModule } from 'src/aws/aws.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Design]),
    ProductsModule,
    UsersModule,
    AwsModule
  ],
  providers: [DesignsResolver, DesignsService],
})
export class DesignsModule {}
