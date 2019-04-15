/*
* Authors: Dmitry Bashmakov, Mathias Donath, Josh Fagen, Lidiya Sokolovskya
* Date Created: April 10, 2019
* Last Modified: April 15, 2019
* Main Purpose: Interaction with api to get, add and update announcement information and provide it to the component that requested it.
*/

import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Announcement} from './announcement';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AnnouncementsService {
    baseUrl = 'http://localhost/coursewebsite/src/assets/api';
    announcements: Announcement[];

    constructor(private http: HttpClient) {
    }

    // getting all the announcements from the database
    getAll(): Observable<Announcement[]> {
        return this.http.get(`${this.baseUrl}/readAnnouncements`).pipe(
            map((res) => {
                this.announcements = res['data'];
                return this.announcements;
            }),
            catchError(this.handleError));
    }

    // adding new announcement
    addAnnouncement(announcement: Announcement): Observable<any> {
        return this.http.post(`${this.baseUrl}/addAnnouncement`, {data: announcement}, {responseType: 'text'}).pipe(
            map((res) => {
                this.announcements.push(res['data']);
                return this.announcements;
            }),
            catchError(this.handleError));
    }

    // Announcement edit function. calling API, passing Announcement object.
    editAnnouncement(announcement: Announcement): Observable<any> {
        return this.http.post(`${this.baseUrl}/editAnnouncement`, {data: announcement}, {responseType: 'text'}).pipe(
            map((res) => {
                this.announcements.push(res['data']);
                return this.announcements;
            }),
            catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        console.log(error);
        return throwError('Error! There must be some mistake in the code.');
    }
}
