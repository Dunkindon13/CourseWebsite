import { Component, OnInit } from '@angular/core';
import {Assignment} from '../../models/assignment';
import {FormBuilder} from '@angular/forms';
import {AssignmentsService} from '../../models/assignments.service';
import {Router} from '@angular/router';
import {Announcement} from '../../models/announcement';
import {AnnouncementsService} from '../../models/announcements.service';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.css']
})
export class AddAnnouncementComponent implements OnInit {

  announcements: Announcement[];
  addAnnouncementForm = this.fb.group({
    title: [null],
    date: [null],
    teacherID: [null],
    body: [null]
  });
  success = '';
  error = '';

  constructor(private fb: FormBuilder, private annSrv: AnnouncementsService, private router: Router) {
  }

  ngOnInit() {

  }

  onSubmit() {
    // alert('Thanks!');
    // console.log(this.addAnnouncementForm);
    const args = {
      title: this.addAnnouncementForm.value.title,
      date: this.addAnnouncementForm.value.date,
      body: this.addAnnouncementForm.value.body,
      teacherID: 77
    };

    const announcement = new Announcement(args);
    this.annSrv.addAnnouncement(announcement).subscribe(
        (res: Announcement[]) => {
          this.announcements = res;
          this.success = 'Announcement is supposed to be created';
          console.log('CL from subscribe to addAnn in add-ann comp.ts', this.announcements);
          this.addAnnouncementForm.reset();
        },
        (err) => {
          this.error = err;
        }
    );

    this.router.navigateByUrl('/announcements');

  }
}
