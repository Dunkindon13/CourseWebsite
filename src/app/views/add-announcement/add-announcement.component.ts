/*
* Authors: Dmitry Bashmakov, Mathias Donath, Josh Fagen, Lidiya Sokolovskya
* Date Created: April 10, 2019
* Last Modified: April 12, 2019
* Main Purpose: TypeScript component for filling out form to add an announcement by a teacher and submitting it to the announcement board.
*/

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
      teacherID: 77,
      title: this.addAnnouncementForm.value.title,
      date: this.addAnnouncementForm.value.date,
      body: this.addAnnouncementForm.value.body
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
