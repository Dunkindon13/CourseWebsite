/*
* Authors: Dmitry Bashmakov, Mathias Donath, Josh Fagen, Lidiya Sokolovskya
* Date Created: April 9, 2019
* Last Modified: April 11, 2019
* Main Purpose: TypeScript component for the navbar
*/

import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogRef} from '@angular/material';
import {AuthService} from '../../models/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  title = 'CourWeb';
  role: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private AuthService: AuthService) {
    this.role = '';
  }

  // Change the role of user depending on button clicked. More robust login system would be implemented here.
  logIn(role) {
    if (role === 'student') {
      this.role = 'student';

    } else if (role === 'teacher') {
      this.role = 'teacher';
    } else {
      this.role = '';
    }

    console.log(this.role);
  }

}
