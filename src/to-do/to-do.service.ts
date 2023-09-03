import { Injectable } from '@nestjs/common';
import { CreateToDoDto } from './dto/create-to-do.dto';
import { UpdateToDoDto } from './dto/update-to-do.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ToDo } from './schemas/to-do.schema';
import { Model } from 'mongoose';

@Injectable()
export class ToDoService {
   constructor(@InjectModel(ToDo.name) private ToDoModel : Model<ToDo>){}

  create(createToDoDto: CreateToDoDto) : Promise<ToDo>{
    const createdToDo = new this.ToDoModel(createToDoDto)
    return createdToDo.save();
  }

  findAll() : Promise<ToDo[]>{
    return this.ToDoModel.find().exec();
  }

  findOne(id: string) : Promise<ToDo> {
    return this.ToDoModel.findById(id);
  }

  update(id: string, updateToDoDto: UpdateToDoDto) : Promise<ToDo> {
    return this.ToDoModel.findByIdAndUpdate(id, updateToDoDto, {
      new : true
    });
  }

  complete(id:string): Promise<ToDo>{
    return this.ToDoModel.findByIdAndUpdate(id, {
      completedAt : Date.now()
    }, {
      new : true
    });
  }
  
  remove(id: string) : Promise<ToDo> {
    return this.ToDoModel.findByIdAndDelete(id);
  }
}
