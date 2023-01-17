import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class api1Call {

    constructor(
        private http: HttpClient,
    ){}

    getOidcData() : Observable<any> {
        const token = localStorage.getItem('access_token')
        return this.http.get(environment.apiUrl + '/identity', {headers: new HttpHeaders().set('Authorization','Bearer '+ token)})
    }
}