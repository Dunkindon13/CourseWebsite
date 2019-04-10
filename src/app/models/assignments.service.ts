import {Injectable} from '@angular/core';
import {Assignment} from './assignment';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AssignmentsService {

    baseUrl = 'http://localhost/coursewebsite/src/assets/api';
    assignments: Assignment[];

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<Assignment[]> {
        return this.http.get(`${this.baseUrl}/readAssignments`).pipe(
            map((res) => {
                this.assignments = res['data'];
                return this.assignments;
            }),
            catchError(this.handleError));
    }

    getSubmittedAssignments()

    private handleError(error: HttpErrorResponse) {
        console.log(error);
        return throwError('Error! There must be some mistake in the code.');
    }
}
