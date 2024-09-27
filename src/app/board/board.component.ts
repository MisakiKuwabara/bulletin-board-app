import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Poststructure } from '../poststructure';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [],
  template: `
    <section class="each-post">
      <h2 class="post-title">{{postStructure.title}}</h2>
      <p class="post-text">{{postStructure.text}}</p>
    </section>
  `,
  styleUrl: './board.component.css'
})

export class BoardComponent {
  @Input() postStructure!: Poststructure;
}
