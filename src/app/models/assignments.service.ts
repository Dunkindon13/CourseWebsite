import {Injectable} from '@angular/core';
import {Assignment} from './assignment';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
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



    addAssignment(assignment: Assignment): Observable<any> {
      return this.http.post(`${this.baseUrl}/addAssignment`, {data: assignment}, {responseType: 'text'}).pipe(
          map((res) => {
              this.assignments.push(res['data']);
              return this.assignments;
          }),
          catchError(this.handleError));

    }

    private handleError(error: HttpErrorResponse) {
        console.log(error);
        return throwError('Error! There must be some mistake in the code.');
    }
}
