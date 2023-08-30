import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { PostModel } from '../post-model';


@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css']
})
export class PostTileComponent {

  posts$: Array<PostModel> = [];

  constructor(private postService: PostService){
    this.postService.getAllPosts().subscribe(post => {
      this.posts$ = post;
    })
  }

}
