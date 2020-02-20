import { Component, OnInit } from '@angular/core';
import {PostsService} from '../posts.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  showId = false;

  constructor(private postService: PostsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.showId = !!params.showId;
    });
  }

}
