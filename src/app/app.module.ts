import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnnouncementsComponent } from './views/announcements/announcements.component';
import { LoginComponent } from './views/login/login.component';
import { TeachersHomeComponent } from './views/teachers-home/teachers-home.component';
import { StudentsHomeComponent } from './views/students-home/students-home.component';
import { NavComponent } from './views/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {MatFormFieldModule, MatFormFieldControl} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatRadioModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {HttpClientModule} from '@angular/common/http';
import { ReversePipe } from './controllers/reverse.pipe';
import { AssignmentsComponent } from './views/assignments/assignments.component';



@NgModule({
  declarations: [
    AppComponent,
    AnnouncementsComponent,
    LoginComponent,
    TeachersHomeComponent,
    StudentsHomeComponent,
    NavComponent,
    ReversePipe,
    AssignmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    MatFormFieldModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  private static HttpModule: any;
}
