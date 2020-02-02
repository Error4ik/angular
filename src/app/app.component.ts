import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

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
export class AppComponent implements OnInit {
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

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }

  removePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id);
  }

  ngOnInit(): void {
    // // TODO ChangeDetectionStrategy.Default.
    // setTimeout(() => {
    //   console.log('Timeout');
    //   this.posts[0].title = 'Changed!';
    // }, 5000);

    // TODO ChangeDetectionStrategy.onPush.
    setTimeout(() => {
      console.log('Timeout');
      this.posts[0] = {
        title: 'Changed',
        text: 'Changed',
        id: 5
      };
    }, 5000);
  }
}
