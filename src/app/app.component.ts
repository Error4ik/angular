import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';

export interface Todo {
  id?: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular HttpClient';

  todoList: Todo[] = [];

  loading = false;

  todoTitle = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchTodoList();
  }

  addTodo() {
    if (this.todoTitle.trim() === '') {
      return;
    }

    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false
    };

    this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
      .subscribe(response => {
        this.todoList.push(response);
        this.todoTitle = '';
      });
  }

  fetchTodoList() {
    this.loading = true;
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .pipe(delay(1500))
      .subscribe(response => {
        this.todoList = response;
        this.loading = false;
      });
  }

  deleteTodo(id: number) {
    this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .subscribe(() => {
        this.todoList = this.todoList.filter(todo => todo.id !== id);
      });
  }
}
