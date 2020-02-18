import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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

  todoTitle = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10').subscribe(response => {
      this.todoList = response;
    });
  }

  addTodo() {
    if (this.todoTitle.trim() === '') {
      return;
    }

    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false
    };

    this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo).subscribe(response => {
      this.todoList.push(response);
      this.todoTitle = '';
    });
  }
}
