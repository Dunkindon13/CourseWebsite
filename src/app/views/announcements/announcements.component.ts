import { Component, OnInit } from '@angular/core';
import {AnnouncementsService} from '../../models/announcements.service';
import {Announcement} from '../../models/announcement';
import {ActivatedRoute} from '@angular/router';

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
  constructor(private announcementsServ: AnnouncementsService,
              private route: ActivatedRoute) {
    this.role = this.route.snapshot.paramMap.get('role');

  }

  ngOnInit() {
    this.getAnnouncements();
    this.setRole();
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

  setRole(): void {
    if (this.role == 'teacher') {
      this.teacherIsLoggedIn = true;
      this.studentIsLoggedIn = false;
    } else if (this.role == 'student') {
      this.teacherIsLoggedIn = false;
      this.studentIsLoggedIn = true;
    } else {
      this.teacherIsLoggedIn = false;
      this.studentIsLoggedIn = false;
    }
  }
}

