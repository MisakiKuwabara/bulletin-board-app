import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  template: `
    <header>
      <h1>ユーザー登録</h1>
    </header>
    <form (submit)="onSubmit($event)">
      <p>ユーザー名</p>
      <input type="text" [(ngModel)]="userName" name="userName" required>
      <p>パスワード</p>
      <input type="text" [(ngModel)]="password" name="password" required>
      <button type="submit">ユーザー登録</button>
      <p>既にアカウントをお持ちですか？</p>
      <p *ngIf="errorMessage">{{ errorMessage }}</p>
    </form>
  `,
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userName = '';
  password = '';
  errorMessage = '';

  constructor(private userService: UserService) {}

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.userService.register(this.userName, this.password)) {
      // 登録成功
      alert('ユーザー登録が成功しました');
    } else {
      this.errorMessage = 'このユーザー名は既に使われています。';
    }
  }
}
