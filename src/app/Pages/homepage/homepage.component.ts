import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationClient } from 'src/app/clients/authentication-service.client';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(
    public authenticationClient: AuthenticationClient,
    public http: HttpClient,
  ) { }

  logout()
  {
    this.authenticationClient.logout();
  }
}
