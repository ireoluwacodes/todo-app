import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ToDoService } from './to-do.service';
import { CreateToDoDto } from './dto/create-to-do.dto';
import { UpdateToDoDto } from './dto/update-to-do.dto';

@Controller('to-do')
export class ToDoController {
  constructor(private readonly toDoService: ToDoService) {}

  @Post()
  create(@Body() createToDoDto: CreateToDoDto) {
    return this.toDoService.create(createToDoDto);
  }

  @Get()
  findAll() {
    return this.toDoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toDoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateToDoDto: UpdateToDoDto) {
    return this.toDoService.update(id, updateToDoDto);
  }

  @Put(':id')
  complete(@Param('id') id: string) {
    return this.toDoService.complete(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toDoService.remove(id);
  }
}
