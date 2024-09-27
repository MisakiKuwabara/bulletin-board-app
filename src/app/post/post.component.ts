import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from '../board/board.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, BoardComponent],
  template: `
    <section>
      <form>
        <p>タイトル</p>
        <input type="text">
        <p>投稿内容</p>
        <textarea></textarea>
        <button type="submit">送信</button>
      </form>
      <section class="board">
        <app-board></app-board>
      </section>
  `,
  styleUrl: './post.component.css'
})

export class PostComponent {

}
