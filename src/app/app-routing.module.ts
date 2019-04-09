import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './views/login/login.component';

import {TeachersHomeComponent} from './views/teachers-home/teachers-home.component';
import {StudentsHomeComponent} from './views/students-home/students-home.component';
import {AnnouncementsComponent} from './views/announcements/announcements.component';
import {AssignmentsComponent} from './views/assignments/assignments.component';
import {AuthenticationGuard} from './controllers/authentication.guard';

const routes: Routes = [
  {path: 'home', component: AnnouncementsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'teacher', component: TeachersHomeComponent, canLoad: [AuthenticationGuard]},
  {path: 'student', component: StudentsHomeComponent},
  {path: 'assignments', component: AssignmentsComponent},
  {path: '**', component: AnnouncementsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
