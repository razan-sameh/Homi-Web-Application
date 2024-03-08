import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from 'src/app/components/pages/my-account-page/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private accountService:AccountService,private router:Router){

    }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
        map(auth => {
            if (auth) {
                if (route.data.roles && route.data.roles.indexOf(auth.role) === -1) {
                    // role not authorised so redirect to home page
                    this.router.navigate(['/']);
                    return false;
                }
                return true;
            }
            else{
                this.router.navigate(['/Account/login',{queryParams:{returnUrl:state.url }}]);
                return false;
            }
        })
    );
}

}
