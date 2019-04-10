import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    isLoggedIn = false;

    constructor() {
    }

    login() {
        this.isLoggedIn = true;
    }

    logout() {
        this.isLoggedIn = false;
    }
}
