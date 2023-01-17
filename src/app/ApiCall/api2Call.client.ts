import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class api2Call {
    constructor(
        private http:HttpClient
    ){}

    getWeatherData() : Observable<any> {
        return this.http.get(environment.apiUrl + '/weather');
    }
}