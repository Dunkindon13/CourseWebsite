import { Component, OnInit } from '@angular/core';
import {Announcement} from '../../models/announcement';
import {TvmazeService} from '../../tempDmitry/tvmaze.service';
import {FakeAnn} from '../../tempDmitry/fake-ann';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {

  announcements: FakeAnn[];
  searchString = 'office';
  // t = 5;

  constructor(private searchService: TvmazeService) {
  }

  ngOnInit() {
    this.searchService.getShowSearchResults(this.searchString).subscribe(results => { this.announcements = results; } );
  }

}
