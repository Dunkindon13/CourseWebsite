import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../models/auth.service';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    // id: number = '';
    loginForm: FormGroup;
    submitted = false;
    user: string = '';
    password: string = '';
    authenticated: string = '';

    constructor(private authService: AuthService,
                private router: Router,
                private route: ActivatedRoute,
                private fb: FormBuilder) {
    }

    ngOnInit() {
        this.loginForm = this.fb.group({
        })
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
