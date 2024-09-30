import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'bulletin-board-app';
}
