import { Component, OnInit } from '@angular/core';
import {AnnouncementsService} from '../../models/announcements.service';
import {Announcement} from '../../models/announcement';
import {ActivatedRoute} from '@angular/router';
import {NavComponent} from '../nav/nav.component';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  announcements: Announcement[];
  error = '';
  success = '';
  role: string;
  teacherIsLoggedIn = true;
  studentIsLoggedIn = false;
<<<<<<< HEAD
  constructor(private announcementsServ: AnnouncementsService,
              private route: ActivatedRoute,
              private nav: NavComponent) {
  }
=======

  constructor(private announcementsServ: AnnouncementsService) { }

>>>>>>> master
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

