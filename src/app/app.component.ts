import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  number = 99;
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  user = {
    name: 'Alex',
    age: 55,
    pets: {cat: 'bob', dog: 'mal'}
  };
  json = JSON.stringify(this.user);
}
