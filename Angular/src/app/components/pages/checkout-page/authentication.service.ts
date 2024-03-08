import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    private jwtHelper: JwtHelperService = new JwtHelperService();

    constructor() { }

    public isAuthenticated(): boolean {
      const token = localStorage.getItem('Token');
      return !this.jwtHelper.isTokenExpired(token);
    }
}
