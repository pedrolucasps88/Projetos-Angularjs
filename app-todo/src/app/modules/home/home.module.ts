import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//components
import { HeaderComponent } from './components/header/header.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoButtonAddItensComponent } from './components/todo-button-add-itens/todo-button-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
//pages
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoButtonAddItensComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
