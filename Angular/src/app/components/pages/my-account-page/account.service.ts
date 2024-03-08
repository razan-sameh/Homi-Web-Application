import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, ReplaySubject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Role } from 'src/app/Models/Role';
import { Address, user } from 'src/app/Models/user';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    baseUrl = environment.apiUrl;
    user: user;

    private currentUserSource = new ReplaySubject<user| null>(1);
    currentUser$ = this.currentUserSource.asObservable();
    constructor(private http:HttpClient,private router : Router) {
        this.currentUser$.subscribe({
            next :x=> [this.user= x,
            console.log(x),
            console.log("role " + this.user && this.user.role === Role.Admin)
        ]
        })
    }
    get isAdmin() {
        return this.user && this.user.role === Role.Admin;
    }
    register(vales:any){
        return this.http.post<user>(this.baseUrl+'Account/register',vales).pipe(
            map(user => {
                localStorage.setItem('Token',user.token);
                this.currentUserSource.next(user);

            })
        )
    }

    resetPassword(values: any) {
        return this.http
            .post<boolean>(this.baseUrl + 'Account/reset-password', values)
            .pipe(
                map((isSuccess) => {
                    return isSuccess;
                })
            );
    }


    login(values:any){
        return this.http.post<user>(this.baseUrl+'Account/login',values).pipe(
            map(user => {
                localStorage.setItem('Token',user.token);
                this.currentUserSource.next(user);
                return user;
            })
        )
    }
    logout(){
        localStorage.removeItem('Token');
        this.currentUserSource.next(null);
        this.router.navigateByUrl('/login');
    }
    checkEmailExists(email:string){
        return this.http.get<boolean>(this.baseUrl+'Account/emailexists?email='+email);
    }
    loadCurrentUser(token:string|null){
        if (token==null) {
            this.currentUserSource.next(null);
            return of(null);
        }
        let headers = new HttpHeaders();
        headers = headers.set('Authorization',`Bearer ${token}`);
        return this.http.get<user>(this.baseUrl +'Account',{headers}).pipe(
            map(user => {
                if (user) {
                    localStorage.setItem('Token',user.token);
                    this.currentUserSource.next(user);
                    return user;
                }
                else{
                    return null;
                }
            })
        )
    }

    getUserAddress(){
        return this.http.get<Address>(this.baseUrl+'Account/address')
    }
    UpdateUserAddress(address:Address){
        this.http.put(this.baseUrl+'Account/address',address)
    }
}
