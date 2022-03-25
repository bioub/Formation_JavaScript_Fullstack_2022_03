import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todoControl = new FormControl('');

  todos: Todo[] = [
    {
      id: 1,
      title: 'ABC',
      completed: false,
    },
    {
      id: 2,
      title: 'DEF',
      completed: true,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(event: Event) {
    event.preventDefault();

    const nextId = (this.todos[this.todos.length - 1]?.id ?? 0) + 1;

    this.todos.push({
      id: nextId,
      title: this.todoControl.value,
      completed: false,
    });
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
