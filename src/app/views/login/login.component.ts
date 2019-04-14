/*
* Authors: Dmitry Bashmakov, Mathias Donath, Josh Fagen, Lidiya Sokolovskya
* Date Created: April 9, 2019
* Last Modified: April 12, 2019
* Main Purpose: TypeScript component to login as teacher or student.
*/
import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../models/auth.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    // id: number = '';
    user: string = '';
    password: string = '';
    authenticated: string = '';

    constructor(private authService: AuthService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.queryParams
            .subscribe(params => this.authenticated = params['authenticated'] || '/login');
    }

    login() {
        if (this.user && this.password) {
            // Getting an error here
            // this.authService.login(this.user);
            this.router.parseUrl(this.authenticated);
        }
    }

}
