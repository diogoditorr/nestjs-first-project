import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { ListAllEntities } from './dto/list-all-entities.dto';

@Controller('cats')
export class CatsController {
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return { message: 'This action adds a new cat', createCatDto };
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return { message: 'This action returns all cats' };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { message: `This action returns #${id} cat` };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return { message: `This action updates a #${id} cat` };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return { message: `This action removes a #${id} cat` };
  }
}
