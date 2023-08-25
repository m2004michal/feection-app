import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostModel } from './post-model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Array<PostModel>> {
    let test :Observable<Array<PostModel>> = this.http.get<Array<PostModel>>('http://localhost:8080/api/post/get/all');
    return test
  }
}