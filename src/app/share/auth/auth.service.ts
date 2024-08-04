import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // BehaviorSubject 是 RxJS 提供的一種特殊的 Subject
  // 總是保存最新的值，並且當新的訂閱者訂閱時，會立即收到當前保存的值。
  private _user = new BehaviorSubject<User | undefined>(void 0);

  public get user() {
    return this._user.value;
  }

  public get isLogged() {
    return this.user != null;
  }

  constructor() {
    try {
      const user = JSON.parse(String(localStorage.getItem('token')));
      if (user) {
        this._user.next(user);
      }
    } catch {}
  }

  public login(user: User) {
    this._user.next(user);
    localStorage.setItem('token', JSON.stringify(user));
    console.log(String(localStorage.getItem('token')));
  }

  public logout() {
    this._user.next(void 0);
    localStorage.removeItem('token');
  }
}
