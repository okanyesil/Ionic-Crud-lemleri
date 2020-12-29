import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {ListAllTodoComponent} from '../components/list-all-todo/list-all-todo.component';
import {TodoDetailComponent} from '../components/todo-detail/todo-detail.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage, ListAllTodoComponent, TodoDetailComponent]
})
export class HomePageModule {}
