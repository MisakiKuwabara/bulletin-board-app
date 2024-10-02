import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user-service.service';
import { Router, RouterModule } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, RouterModule],
  template: `
    <header>
      <h1>サインイン</h1>
    </header>
    <form (submit)="onSubmit($event)">
      <p>ユーザー名</p>
      <input type="text" [(ngModel)]="userName" name="userName" required>
      <p>パスワード</p>
      <input type="text" [(ngModel)]="password" name="password" required>
      <button type="submit">サインイン</button>
      <p class="register-link">アカウントをお持ちでないですか？</p>
      <a [routerLink]="['/app-register']">ユーザー登録</a>
      <p *ngIf="errorMessage">{{ errorMessage }}</p>
    </form>
  `,
  styleUrl: './sign-in.component.css'
})

export class SignInComponent {
  userName = '';
  password = '';
  errorMessage = '';

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.userService.signIn(this.userName, this.password)) {
      // サインイン成功後、投稿ページに移動
      alert('サインインが成功しました');
      this.router.navigate(['/app-post']); // 投稿画面に遷移
    } else {
      this.errorMessage = 'ユーザー名またはパスワードが間違っています。';
    }
  }
}
