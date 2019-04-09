import {Injectable} from '@angular/core';
import {CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuard implements CanLoad {
    canLoad(
        route: Route,
        segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

        // Need to add proper URL path once user is logged in.
        /*let url: string = route.path;
        console.log('Url:' + url);
        if (url === 'teacher') {
            alert('You are not authorised to visit this page!');
            return false;
        }*/
        return true;
    }
}
