import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
import { ProductsModule } from './products/products.module';
import { DesignsModule } from './designs/designs.module';
import { AwsModule } from './aws/aws.module';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(),'src/schema.gql')
  }),
    TypeOrmModule.forRoot({
      type: 'postgres',          // Tipo de base de datos
      host: 'localhost',          // Host de la base de datos
      port: 5432,                 // Puerto de PostgreSQL
      username: 'myuser',         // Usuario de la base de datos
      password: 'mypassword',     // Contraseña del usuario
      database: 'mydatabase', 
      entities:[__dirname + '/**/*.entity{.ts,.js}'],
      synchronize:true
    }),
    AwsModule,
    UsersModule,
    CategoryModule,
    ProductsModule,
    DesignsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
