import {Component} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Test';

  posts: Post[] = [
    {
      title: 'Ангулар.',
      text: 'Выучить ангулар компонент.',
      id: 1
    },
    {
      title: 'TypeScript',
      text: 'Выучить TypeScript',
      id: 2
    }
  ];
}
