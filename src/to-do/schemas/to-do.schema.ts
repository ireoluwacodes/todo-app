import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<ToDo>;

@Schema({timestamps : true})
export class ToDo {
  @Prop({required : true})
  name: string;

  @Prop({ type: Date })
  completedAt: string;

  @Prop({ default: 'incomplete', enum: ['complete', 'incomplete'] })
  status: string;
}

export const ToDoSchema = SchemaFactory.createForClass(ToDo);
