import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private users = new Map<string, string>();  // ユーザー名とパスワードを保持
  private currentUser: string | null = null;  // 現在サインインしているユーザー名

  // ユーザー登録
  register(userName: string, password: string): boolean {
    if (this.users.has(userName)) {
      return false;  // すでにユーザーが存在する
    }
    this.users.set(userName, password);
    return true;
  }

  // サインイン
  signIn(userName: string, password: string): boolean {
    if (this.users.get(userName) === password) {
      this.currentUser = userName;  // サインイン成功
      return true;
    }
    return false;
  }

  // サインアウト
  signOut(): void {
    this.currentUser = null;
  }

  // 現在のユーザーを取得
  getCurrentUser(): string | null {
    return this.currentUser;
  }
}
