import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToDoModule } from './to-do/to-do.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ToDoModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest-todo-app')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
