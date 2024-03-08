import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Route, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { AccountService } from 'src/app/components/pages/my-account-page/account.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router:Router, private accountService:AccountService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError((error:HttpErrorResponse)=>{
        if (error) {
            if (error.status == 404) {
                this.router.navigateByUrl("/not-found")
            }
            if (error.status == 500) {
                this.router.navigateByUrl("/server-error")
            }
            // if ([401, 403].indexOf(error.status) !== -1) {
            //     // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            //     this.accountService.logout();
            // }
        }
        return throwError(()=>new Error(error.message))
    }));
}
}
