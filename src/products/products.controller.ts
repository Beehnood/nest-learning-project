import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { UsersService } from 'src/users/users.service';


@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly UsersService: UsersService,
    ) {}

  @Post()
  create(@Body() CreateProductDto:CreateProductDto) {
    console.log(CreateProductDto.price);
    if(CreateProductDto.price > 1000){
      throw new Error('Price is too high');
    }
    return {message : 'ok', data: CreateProductDto};
  }

  @Get()
  findAll() {
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return { method:'patch', id };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
