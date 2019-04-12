import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../models/auth.service';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    // id: number = '';
    loginForm: FormGroup;
    submitted = false;
    loading = false;
    authenticated = '';

    constructor(private authService: AuthService,
                private router: Router,
                private route: ActivatedRoute,
                private fb: FormBuilder) {
    }

    ngOnInit() {
        this.loginForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        })
        this.route.queryParams
            .subscribe(params => this.authenticated = params['authenticated'] || '/login');
    }
    get f() {
        return this.loginForm.controls;
    }

    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authService.login(this.f.username.value, this.f.password.value).pipe.subscribe

    }

}
