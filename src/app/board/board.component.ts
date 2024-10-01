import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, DatePipe} from '@angular/common';
import { Poststructure } from '../poststructure';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule],
  providers: [DatePipe],
  template: `
    <section class="each-post">
      <!--<p class="post-id">ID : {{postStructure.id}}</p>-->
      <p class="post-userName">ユーザー名：{{postStructure.userName}}</p>
      <h2 class="post-title">{{postStructure.title}}</h2>
      <p class="post-text">{{postStructure.text}}</p>
      <p class="post-time">投稿日時：{{ postStructure.date | date:'yyyy/MM/dd HH:mm:ss' }}</p>
      <button class="post-edit" type="submit" (click)="editPost()">編集</button>
      <button class="post-delete" type="submit" (click)="removePost()">削除</button>
    </section>
  `,
  styleUrl: './board.component.css'
})

export class BoardComponent {
  @Input() postStructure!: Poststructure;
  @Output() deletePost = new EventEmitter<number>(); // 削除イベント, <>で扱うデータ型を指定
  @Output() editPostEvent = new EventEmitter<Poststructure>();

  now = new Date();
  // changedate = '';
  // pipe = new DatePipe('jp-JP');
  // changeTimeFormat(now) {
  //   let ChangedFormat = this.pipe.transform(this.now, 'yyyy/mm/dd');
  //   this.changedate = ChangedFormat;
  // }

  removePost() {
    this.deletePost.emit(this.postStructure.id); // 親コンポーネントに削除リクエスト
  }

  editPost() {
    this.editPostEvent.emit(this.postStructure);
  }
}
