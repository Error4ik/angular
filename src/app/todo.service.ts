import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, delay} from 'rxjs/operators';

export interface Todo {
  id?: number;
  title: string;
  completed: boolean;
}

@Injectable({providedIn: 'root'})
export class TodoService {
  constructor(private httpClient: HttpClient) {
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo, {
      headers: new HttpHeaders({
        MyCustomHeader: Math.random().toString(),
        OtherHeader: 'I\'m second header.'
      })
    });
  }

  fetchTodoList(): Observable<Todo[]> {
    let params = new HttpParams();
    params = params.append('_limit', '5');
    params = params.append('custom', 'anything');
    return this.httpClient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?', {
      params
    })
      .pipe(delay(500));
  }

  removeTodo(id: number): Observable<void> {
    return this.httpClient.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  completeTodo(id: number): Observable<Todo> {
    return this.httpClient.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    }).pipe(catchError(error => {
      console.log('Error:', error.message);
      error.message = 'Something went wrong...';
      return throwError(error);
    }));
  }
}
