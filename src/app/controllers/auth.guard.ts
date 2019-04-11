import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../models/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<boolean> | Promise<boolean> | boolean {

        return this.authService.isTeacher().then(
            (authenticate: boolean) => {
                if (authenticate) {
                    return true;
                } else {
                    this.router.navigate(['/login']);
                    return false;
                }
            }
        );

        return this.authService.isStudent().then(
            (authenticate: boolean) => {
                if (authenticate) {
                    return true;
                } else {
                    this.router.navigate(['/login']);
                    return false;
                }
            }
        );

        return this.authService.isAdmin().then(
            (authenticate: boolean) => {
                if (authenticate) {
                    return true;
                } else {
                    this.router.navigate(['/login']);
                    return false;
                }
            }
        );
    }
}

/* /!*if (!this.authService.isLoggedIn) {

     return this.router.createUrlTree(
         ['/login', {message: 'You do not have the permission to view this page'}]
     );*!/

     /!* window.alert('You don\'t have permission to view this page');
      return this.router.parseUrl('/login');*!/

     // Delete this part when guard works, for testing purposes
     //return true;
 } else {
     return true;
 }
}
}*/

/* if (this.authGuardService.isLoggedIn()) {
   return true;
 } else {
   window.alert('You don\'t have permission to view this page');
   return false;
 }
 return true;
}*/
// Need to add proper URL path once user is logged in.
/*let url: string = route.path;
console.log('Url:' + url);
if (url === 'teacher') {
    alert('You are not authorised to visit this page!');
    return false;
}*/

