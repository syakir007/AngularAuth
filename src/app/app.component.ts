import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // callApi() {
  //   const token = this.oidcSecurityService.getAccessToken().subscribe((token) =>{
  //     const httpOptions = {
  //       headers: new HttpHeaders({
  //         Authorization: 'Bearer ' + token,
  //       }),
  //     };

  //     console.log(token);

  //     this.http.get("https://localhost:6001/identity", httpOptions)
  //       .subscribe((data: any) => {
  //       console.log("api1 result", data);
  //     });

  //   });
  // }

  // callWeather() {
  //   const token = this.oidcSecurityService.getAccessToken().subscribe((token) =>{
  //     const httpOptions = {
  //       headers: new HttpHeaders({
  //         Authorization: 'Bearer ' + token,
  //       }),
  //     };

  //     console.log(token);

  //     this.http.get("https://localhost:6001/weather", httpOptions)
  //       .subscribe((data: any) => {
  //       console.log("api2 result", data);
  //     });

  //   });
  // }
}
