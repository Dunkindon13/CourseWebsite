/*
* Authors: Dmitry Bashmakov, Mathias Donath, Josh Fagen, Lidiya Sokolovskya
* Date Created: April 8, 2019
* Last Modified: April 10, 2019
* Main Purpose: TypeScript component to show all announcements currently on the announcement board.
*/
import {Component, OnInit} from '@angular/core';
import {AnnouncementsService} from '../../models/announcements.service';
import {Announcement} from '../../models/announcement';
import {ActivatedRoute} from '@angular/router';
import {NavComponent} from '../nav/nav.component';
import {MatPaginator, PageEvent} from '@angular/material';


@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  announcements: Announcement[];
  error = '';
  success = '';
  constructor(private announcementsServ: AnnouncementsService,
              private route: ActivatedRoute,
              private nav: NavComponent) {
  }
  ngOnInit() {
      // Call getAnnouncements() when page's loaded.
    this.getAnnouncements();

  }

  // getAnnouncements() calls API via service to get all of the announcements and stores them in this.announcements.
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

  // Gets total number of announcements for display and pagination
  getAmountOfAnnouncements(): void {
    this.announcementsServ.getAll().subscribe(
        (res) => {
          console.log ('AAAAAAAAAAAA');
          if (res[0]) {
            console.log ('AAAAAAAAAAAA');
            this.announcements = [];
            res.forEach((item) => {
              item = new Announcement(item);
              this.announcements.push(item);
            });

          } else {
            console.warn(res);
          }

        }
    );
  }

    mark(announcementid) {
      this.announcementsServ.mark().subscribe(
          (res) => {
              // Code to mark assignment as read goes here.
          }
      )
    }

}

