import { Component } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public oidcSecurityService: OidcSecurityService,
    public http: HttpClient) {}

  ngOnInit(){
    this.oidcSecurityService
      .checkAuth()
      .subscribe(({isAuthenticated, userData, accessToken, idToken}) => console.log('is authenticated',isAuthenticated))
  }

  login() {
    this.oidcSecurityService
      .authorize();
  }

  logout() {
    this.oidcSecurityService
      .logoff()
      .subscribe((result) => console.log(result));
  }

  callApi() {
    const token = this.oidcSecurityService.getAccessToken().subscribe((token) =>{
      const httpOptions = {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      };

      console.log(token);

      this.http.get("https://localhost:6001/identity", httpOptions)
        .subscribe((data: any) => {
        console.log("api1 result", data);
      });

    });
  }

  callWeather() {
    const token = this.oidcSecurityService.getAccessToken().subscribe((token) =>{
      const httpOptions = {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      };

      console.log(token);

      this.http.get("https://localhost:6001/weather", httpOptions)
        .subscribe((data: any) => {
        console.log("api2 result", data);
      });

    });
  }
}
