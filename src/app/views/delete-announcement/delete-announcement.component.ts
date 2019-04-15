//Authors: Dmitry Bashmakov, Mathias Donath, Josh Fagen, Lidiya Sokolovskya
// Date Created: April 9, 2019
// Last Modified: April 15, 2019
// Main Purpose: TS Filed to delete an assignment

import { Component, OnInit } from '@angular/core';
import {AnnouncementsService} from '../../models/announcements.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Announcement} from '../../models/announcement';

@Component({
  selector: 'app-delete-announcement',
  templateUrl: './delete-announcement.component.html',
  styleUrls: ['./delete-announcement.component.scss']
})
export class DeleteAnnouncementComponent implements OnInit {

  id: number;
  announcements: Announcement[];

  constructor(private annSrv: AnnouncementsService,
              private router: Router,
              private route: ActivatedRoute) {
    // Store id to delete a specific assignment
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
  }

  ngOnInit() {
  }

  // Use Service to call API to delete the assignment
  deleteAnnouncement() {
    this.annSrv.deleteAnnouncement(this.id).subscribe(
        (res: Announcement[]) => {
          this.announcements = res;
        }
    );
    this.router.navigateByUrl('home'); // Send user to homepage

  }

  cancel() {
    this.router.navigateByUrl('home'); // User doesn't want to delete, send them back to homepage
  }

}
