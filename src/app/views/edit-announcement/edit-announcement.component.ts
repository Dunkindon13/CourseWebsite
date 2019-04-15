/*
* Authors: Dmitry Bashmakov, Mathias Donath, Josh Fagen, Lidiya Sokolovskya
* Date Created: April 9, 2019
* Last Modified: April 11, 2019
* Main Purpose: TypeScript component to edit an announcement.
*/
import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Announcement} from '../../models/announcement';
import {AnnouncementsService} from '../../models/announcements.service';

@Component({
  selector: 'app-edit-announcement',
  templateUrl: './edit-announcement.component.html',
  styleUrls: ['./edit-announcement.component.css']
})
export class EditAnnouncementComponent implements OnInit {

    id: number;
    today = new Date();
    announcements: Announcement[];
    editAnnouncementForm = this.fb.group({
    title: [null],
    date: [null],
    teacherID: [null],
    body: [null]
  });
  success = '';
  error = '';

  constructor(
      private fb: FormBuilder,
      private annSrv: AnnouncementsService,
      private router: Router,
      private route: ActivatedRoute) {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
}

  ngOnInit() {

  }

// onSubmit() calls the API editAnnouncement() via the service, and sends it the updated information to replace the old info.
  onSubmit() {
    const args = {
      id: this.id,
      teacherID: 78,
      date: this.editAnnouncementForm.value.date,
      title: this.editAnnouncementForm.value.title,
      body: this.editAnnouncementForm.value.body
    };

    const announcement = new Announcement(args);
    this.annSrv.editAnnouncement(announcement).subscribe(
        (res: Announcement[]) => {
          this.announcements = res;
          this.success = 'Announcement is supposed to be created';
          console.log('CL from subscribe to addAnn in add-ann comp.ts', this.announcements);
          this.editAnnouncementForm.reset();
        },
        (err) => {
          this.error = err;
        }
    );

    this.router.navigateByUrl('/announcements');

  }
}
