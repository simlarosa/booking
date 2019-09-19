import { Auth } from './../../app/model/auth';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    data: Auth;
    error: any;

    constructor(
      private http: HttpClient,
      private router: Router
    ) {}


    login({user, pass}) {
        this.error = null;

        const params = new HttpParams()
            .set('user', user)
            .set('pass', pass);

        this.http.get<Auth>('http://localhost:3000/login', { params })
            .subscribe(
                res => {
                this.data = res;
                this.router.navigateByUrl('search');
            },
            err => this.error = err
            );
    }

    logout() {
        this.data = null;
        this.router.navigateByUrl('login');
    }

    isLogged() {
        const isAuth = this.data && this.data.token ? true : false;
        return isAuth;
    }
}
