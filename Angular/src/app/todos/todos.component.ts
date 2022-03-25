import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todoControl = new FormControl('');

  todos: Todo[] = [];

  constructor(private todoService: TodoService) {

  }

  ngOnInit(): void {
    this.todoService.getAll().subscribe((todos) => {
      this.todos = todos;
    });
  }

  addTodo(event: Event) {
    event.preventDefault();

    // const nextId = (this.todos[this.todos.length - 1]?.id ?? 0) + 1;

    // this.todos.push({
    //   id: nextId,
    //   title: this.todoControl.value,
    //   completed: false,
    // });
    this.todoService.create({title: this.todoControl.value}).subscribe((todo) => {
      this.todos.push(todo);
    });
  }

  deleteTodo(todo: Todo) {
    this.todoService.delete(todo).subscribe(() => {
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    })
  }
}
