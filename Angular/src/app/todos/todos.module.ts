import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TodosRoutingModule
  ]
})
export class TodosModule { }
