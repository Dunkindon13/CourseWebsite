import {Injectable} from '@angular/core';
import {Assignment} from './assignment';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {SubmittedAssignment} from './submittedAssignment';
import {Announcement} from './announcement';

@Injectable({
    providedIn: 'root'
})
export class AssignmentsService {

    baseUrl = 'http://localhost/coursewebsite/src/assets/api';
    assignments: Assignment[];
    submittedAssignments: SubmittedAssignment[];

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
    getAllSubmitted(): Observable<SubmittedAssignment[]> {
        return this.http.get(`${this.baseUrl}/readSubmittedAssignments`).pipe(
            map((res) => {
                this.submittedAssignments = res['data'];
                return this.submittedAssignments;
            }),
            catchError(this.handleError));
    }

    submitAssignment(assignment: SubmittedAssignment): Observable<any> {
        return this.http.post( `${this.baseUrl}/submitAssignment`, {data: assignment}, {responseType: 'text'}).pipe(
            map((res) => {
                this.submittedAssignments.push(res['data']);
                return this.submittedAssignments;

            }),
            catchError(this.handleError)
        );
    }

    updateGrade(assignment: SubmittedAssignment): Observable<any> {
        return this.http.post(`${this.baseUrl}/updateGrade`, {data: assignment}, {responseType: 'text'}).pipe(
            map((res) => {
                this.submittedAssignments.push(res['data']);
                return this.submittedAssignments;
            }),
            catchError(this.handleError));

    }

    private handleError(error: HttpErrorResponse) {
        console.log(error);
        return throwError('Error! There must be some mistake in the code.');
    }
}
