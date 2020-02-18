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

  todos: Todo[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10').subscribe(response => {
      this.todos = response;
    });
  }
}
