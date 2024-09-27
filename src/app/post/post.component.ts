import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BoardComponent } from '../board/board.component';
import { Poststructure } from '../poststructure';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, FormsModule, BoardComponent],
  template: `
    <section>
      <form (submit)="submitFunc($event)">
        <p>タイトル（※最大50文字）</p>
        <input type="text" maxlength="50" [(ngModel)]="newPost.title" name="title" required>
        <p>投稿内容（※最大1000文字）</p>
        <textarea maxlength="1000" [(ngModel)]="newPost.text" name="text" reqiured></textarea>
        <button type="submit">送信</button>
      </form>
      <section class="board">
        <app-board *ngFor="let post of posts" [postStructure]="post" (deletePost)="deleteFunc($event)"></app-board>
      </section>
  `,
  styleUrl: './post.component.css'
})

export class PostComponent {
  newPost: Poststructure = { id: 0, title: '', text: '' };
  posts: Poststructure[] = [];
  
  submitFunc(event: Event) {
    event.preventDefault();  // デフォルトのフォーム送信を防止
    if (this.newPost.title && this.newPost.text) {
      this.newPost.id = this.posts.length + 1; // 新しい投稿にIDを付与
      this.posts.push({ ...this.newPost });  // 現在の投稿をリストに追加
      this.newPost = { id: 0, title: '', text: '' };  // フォームをリセット
    }
  }

  deleteFunc(postId: number) { //"postId"は削除したい投稿のid
    this.posts = this.posts.filter(post => post.id !== postId); // 投稿を削除
  }
}
