/*
* Authors: Dmitry Bashmakov, Mathias Donath, Josh Fagen, Lidiya Sokolovskya
* Date Created: April 8, 2019
* Last Modified: April 10, 2019
* Main Purpose: TypeScript component to show all announcements currently on the announcement board.
*/
import {Component, OnInit} from '@angular/core';
import {AnnouncementsService} from '../../models/announcements.service';
import {Announcement} from '../../models/announcement';

@Component({
    selector: 'app-announcements',
    templateUrl: './announcements.component.html',
    styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
    announcements: Announcement[];
    error = '';
    success = '';
    teacherIsLoggedIn = true;
    studentIsLoggedIn = false;

    constructor(private announcementsServ: AnnouncementsService) {
    }

    ngOnInit() {
        this.getAnnouncements();
    }

    getAnnouncements(): void {
        this.announcementsServ.getAll().subscribe(
            (res: Announcement[]) => {
                console.log('This Works');
                this.announcements = res;
            },
            (err) => {
                this.error = err;
            }
        );
    }
}

