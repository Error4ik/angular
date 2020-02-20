import {Injectable} from '@angular/core';

export interface Post {
  id: number;
  title: string;
  text: string;
}

@Injectable({providedIn: 'root'})
export class PostsService {
  posts: Post[] = [
    {id: 1, title: 'Post 1', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, magnam! 111'},
    {id: 1, title: 'Post 2', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, magnam! 222'},
    {id: 1, title: 'Post 3', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, magnam! 333'},
    {id: 1, title: 'Post 4', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, magnam! 444'}
  ];

  getById(id: number) {
    return this.posts.find(p => p.id === id);
  }
}
