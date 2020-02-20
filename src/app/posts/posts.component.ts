import { Component, OnInit } from '@angular/core';
import {PostsService} from '../posts.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  showId = false;

  constructor(private postService: PostsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.showId = !!params.showId;
    });

    this.route.fragment.subscribe((fragment) => {
      console.log('Fragment', fragment);
    });
  }

  showIdProgram() {
    this.router.navigate(['/posts'], {
      queryParams: {
        showId: true
      },
      fragment: 'program-fragment!'
    });
  }
}
