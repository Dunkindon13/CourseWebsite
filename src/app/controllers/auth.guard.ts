import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../models/auth.service';
import {NavComponent} from '../views/nav/nav.component';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router, private nav: NavComponent) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const role = this.nav.role;
        if (role === '') {
            return false;
            this.router.navigate(['/announcements']);
        }

        if (role === 'teacher') {
            return true;
            // this.router.navigate(['/assignments']);
        }

        /*if (role === 'student') {
            return false;
            this.router.navigate(['/assignments']);
        }*/
    }
}
