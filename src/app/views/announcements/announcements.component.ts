import { Component, OnInit } from '@angular/core';
import {Announcement} from '../../models/announcement';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.sass']
})
export class AnnouncementsComponent implements OnInit {

  announcements: Announcement;
  t = 5;

  constructor() {
  }

  ngOnInit() {
  //   this.announcements =
  //     new Announcement({
  //       id: 1,
  //       date: now(),
  //       title: 'Dummy Ann 1',
  //       body: 'Dummy Ann 1 body text'}
  //       )
  //     ;
  }

}
