import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Todo[]>('http://localhost:3000/todos')
  }

  create(todo: Todo) {
    return this.httpClient.post<Todo>('http://localhost:3000/todos', todo)
  }

  delete(todo: Todo) {
    return this.httpClient.delete<Todo>('http://localhost:3000/todos/'+todo._id)
  }
}
