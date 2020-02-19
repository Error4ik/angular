import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, delay, map, tap} from 'rxjs/operators';

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
      params,
      observe: 'response'
    })
      .pipe(map(response => {
        console.log(response);
        return response.body;
      }))
      .pipe(delay(500));
  }

  removeTodo(id: number): Observable<any> {
    return this.httpClient.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      observe: 'events'
    }).pipe(tap(event => {
      if (event.type === HttpEventType.Sent) {
        console.log('Sent', event);
      }
      if (event.type === HttpEventType.Response) {
        console.log('Response', event);
      }
    }));
  }

  completeTodo(id: number): Observable<Todo> {
    return this.httpClient.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    }, {
      responseType: 'json' // default
    }).pipe(catchError(error => {
      console.log('Error:', error.message);
      error.message = 'Something went wrong...';
      return throwError(error);
    }));
  }
}
