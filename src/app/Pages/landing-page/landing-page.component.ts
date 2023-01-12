import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationClient } from 'src/app/clients/authentication-service.client';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  constructor(
    public authenticationClient: AuthenticationClient,
    public http: HttpClient,
  ) { }

  login()
  {
    this.authenticationClient.login();
  }

}
