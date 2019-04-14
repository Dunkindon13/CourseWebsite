import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {Assignment} from './assignment';
import {Observable, throwError} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    loggedIn = false;
    baseUrl = 'http://localhost/coursewebsite/src/assets/api';
    constructor(private http: HttpClient) {
    }

    login(username: string, password: string) {

    }

    logout() {
        this.loggedIn = false;
        localStorage.removeItem('currentUser');
    }

    setRole() {

    }

    // isTeacher() {
    //     const isUserTeacher = new Promise(
    //         (resolve) => {
    //             resolve(this.loggedIn);
    //         }
    //     );
    //     return isUserTeacher;
    // }
    //
    // isStudent() {
    //     const isUserStudent = new Promise(
    //         (resolve) => {
    //             resolve(this.loggedIn);
    //         }
    //     );
    //     return isUserStudent;
    // }
    //
    // isAdmin() {
    //     const isUserAdmin = new Promise(
    //         (resolve) => {
    //             resolve(this.loggedIn);
    //         }
    //     );
    //     return isUserAdmin;
    // }
}
