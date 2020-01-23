import {Component} from '@angular/core';

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

  angularLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png';
  javaScriptLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png';

  img = this.angularLogo;

  constructor() {
    setInterval(() => {
      this.img === this.angularLogo ? this.img = this.javaScriptLogo : this.img = this.angularLogo;
    }, 1000);
  }
}
