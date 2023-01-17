import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationClient } from 'src/app/clients/authentication-service.client';
import { Roles } from 'src/app/models/roles';
import { Scopes } from 'src/app/models/scopes';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(
    public authenticationClient: AuthenticationClient,
    public http: HttpClient,
    private authservice: AuthService,
  ) { }

  logout()
  {
    this.authenticationClient.logout();
  }

  isAllow(): boolean {
    const user = this.authservice.getUser();
    return user !== null && user.role.indexOf(Roles.Staff) !== -1;
  }
}
