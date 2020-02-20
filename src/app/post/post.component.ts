import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Post, PostsService} from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post;

  constructor(private route: ActivatedRoute, private postService: PostsService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.post = this.postService.getById(+params.id);
    });
  }

  loadPost() {
    this.router.navigate(['/posts', 4]);
  }
}
