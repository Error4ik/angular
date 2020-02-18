import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {delay} from 'rxjs/operators';

export interface Todo {
  id?: number;
  title: string;
  completed: boolean;
}

@Injectable({providedIn: 'root'})
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  addTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo);
  }

  fetchTodoList(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .pipe(delay(500));
  }

  removeTodo(id: number): Observable<void> {
    return this.httpClient.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  completeTodo(id: number): Observable<Todo> {
    return this.httpClient.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    });
  }
}
