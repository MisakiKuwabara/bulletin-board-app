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
        <button type="submit">{{ isEditing ? '更新' : '送信' }}</button> <!-- モードに応じてボタンのテキストを変更 -->
        <!--<button type="submit">送信</button>-->
      </form>
      <section class="board">
        <app-board *ngFor="let post of posts" 
        [postStructure]="post" 
        (deletePost)="deleteFunc($event)"
        (editPostEvent)="editFunc($event)"></app-board>
      </section>
  `,
  styleUrl: './post.component.css'
})

export class PostComponent {
  newPost: Poststructure = { id: 0, title: '', text: '' };
  posts: Poststructure[] = [];
  isEditing: boolean = false;  // 編集モードかどうかを示すフラグ
  editingPostId: number | null = null;  // 編集中の投稿IDを保持
  
  submitFunc(event: Event) {
    event.preventDefault(); //ページのリロードを防ぐ
    if (this.newPost.title && this.newPost.text) {
      if (this.isEditing && this.editingPostId !== null) {
        // 編集モードの場合、投稿を更新
        const postIndex = this.posts.findIndex(post => post.id === this.editingPostId);
        if (postIndex !== -1) {
          this.posts[postIndex] = { ...this.newPost, id: this.editingPostId };  // 投稿を更新
        }
        this.isEditing = false; //編集モードの解除
        this.editingPostId = null;
      } else {
        // 新規投稿を追加
        this.newPost.id = this.posts.length + 1;
        this.posts.push({ ...this.newPost });
      }
      // フォームをリセット
      this.newPost = { id: 0, title: '', text: '' };
    }
  }

  deleteFunc(postId: number) { //"postId"は削除したい投稿のid
    this.posts = this.posts.filter(post => post.id !== postId); // 投稿を削除
  }

  editFunc(post: Poststructure) {
    // 編集モードに入り、編集対象の投稿データをフォームにセット
    this.newPost = { ...post };
    this.isEditing = true;
    this.editingPostId = post.id;  // 編集対象のIDを保持
  }
}
