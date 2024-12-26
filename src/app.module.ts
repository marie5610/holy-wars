/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { ShoppingModule } from './shopping/shopping.module';
import { AddressModule } from './address/address.module';

@Module({
  imports: [ProductsModule, UsersModule, ShoppingModule, AddressModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
