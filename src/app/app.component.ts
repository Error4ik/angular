import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';
import {Todo, TodoService} from './todo.service';

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

  error = '';

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.fetchTodoList();
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }

    const todo: Todo = {
      title: this.todoTitle,
      completed: false
    };

    this.todoService.addTodo(todo)
      .subscribe(response => {
        this.todoList.push(response);
        this.todoTitle = '';
      });
  }

  fetchTodoList() {
    this.loading = true;
    this.todoService.fetchTodoList()
      .subscribe(response => {
        this.todoList = response;
        this.loading = false;
      });
  }

  removeTodo(id: number) {
    this.todoService.removeTodo(id)
      .subscribe(() => {
        this.todoList = this.todoList.filter(todo => todo.id !== id);
      });
  }

  completeTodo(id: number) {
    this.todoService.completeTodo(id)
      .subscribe(todo => {
        this.todoList.find(t => t.id === todo.id).completed = true;
      }, error => {
        this.error = error.message;
      });
  }
}
