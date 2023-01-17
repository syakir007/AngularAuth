import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userkey = 'user';

  constructor() { }

  public getUser(): User | null {
    const userJson = localStorage.getItem(this.userkey);
    if(userJson) {
      let user: User = JSON.parse(userJson);
      return user;
    }
    return null;
  }

  public isLoggedIn(): boolean {
    const user = this.getUser();
    if (user) {
      return user.access_token != null && user.access_token.length > 1;
    }
    return false;
  }

  public getToken(): string | null {
    const user = this.getUser();
    if (user) {
      return user.access_token;
    }
    return null;
  }
}
