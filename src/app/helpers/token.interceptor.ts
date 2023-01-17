// import { AuthService } from "../services/auth.service";
// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable } from "rxjs";

// @Injectable()

// export class TokeniInterceptor implements HttpInterceptor {
//     constructor(public authservice: AuthService){}
//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         if(this.authservice.isLoggedIn()){
//             let newRequest = request.clone({
//                 setHeaders: {
//                     Authorization: `Bearer ${this.authservice.getToken()}`,
//                 },
//             });
//             return next.handle(newRequest);
//         }
//         return next.handle(request);
//     }
// }