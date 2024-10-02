// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Poststructure } from './poststructure';

// @Injectable({
//   providedIn: 'root'
// })
// export class PostService {
//   private apiUrl = 'http://localhost:3000/posts';

//   constructor(private http: HttpClient) {}

//   // 全ての投稿を取得
//   getPosts(): Observable<Poststructure[]> {
//     return this.http.get<Poststructure[]>(this.apiUrl);
//   }

//   // 新しい投稿を作成
//   createPost(post: Poststructure): Observable<Poststructure> {
//     return this.http.post<Poststructure>(this.apiUrl, post);
//   }
// }
