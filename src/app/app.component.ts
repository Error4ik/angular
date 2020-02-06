import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular Pipes';
  search = '';

  posts: Post [] = [
    {title: 'Meat', text: 'beef'},
    {title: 'Bread', text: 'grain bread'},
    {title: 'Milk', text: 'cow\'s milk'},
  ];

  ngOnInit(): void {
  }
}
