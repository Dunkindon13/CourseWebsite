import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './views/login/login.component';

import {TeachersHomeComponent} from './views/teachers-home/teachers-home.component';
import {StudentsHomeComponent} from './views/students-home/students-home.component';
import {AnnouncementsComponent} from './views/announcements/announcements.component';
import {AssignmentsComponent} from './views/assignments/assignments.component';
import {AddAssignmentComponent} from './views/add-assignment/add-assignment.component';
import {AuthGuard} from './controllers/auth.guard';

const routes: Routes = [
  {path: 'home', component: AnnouncementsComponent},
  {path: 'login', component: LoginComponent, /*canActivate: [AuthGuard]*/},
  {path: 'teacher', component: TeachersHomeComponent, /*canActivate: [AuthGuard]*/},
  {path: 'student', component: StudentsHomeComponent},
  {path: 'assignments', component: AssignmentsComponent},
  {path: 'addassignment', component: AddAssignmentComponent},
  {path: '**', component: AnnouncementsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
