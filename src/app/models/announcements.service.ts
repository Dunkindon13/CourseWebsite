import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Announcement} from './announcement';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService {
  baseUrl = 'http://localhost/coursewebsite/assets/api';
  announcements: Announcement[];
  constructor(private http: HttpClient) { }

  getAll(): Observable<Announcement[]> {
    return this.http.get(`${this.baseUrl}/readAnnouncements`).pipe(
      map((res) => {
        this.announcements = res['data'];
        return this.announcements;
      }),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError('Error! There must be some mistake in the code.');
  }
}
