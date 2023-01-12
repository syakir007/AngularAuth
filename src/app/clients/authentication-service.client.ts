import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationClient {

  constructor(
    private oidcSecurityService: OidcSecurityService,
    private http: HttpClient,
  ) { }

  public login() {
    this.oidcSecurityService
      .authorize();
  }

  public logout() {
    this.oidcSecurityService
      .logoff()
      .subscribe((result) => console.log(result));
  }
}
