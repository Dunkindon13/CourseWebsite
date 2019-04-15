/*
* Authors: Dmitry Bashmakov, Mathias Donath, Josh Fagen, Lidiya Sokolovskya
* Date Created: April 10, 2019
* Last Modified: April 14, 2019
* Main Purpose: Listing necessary components to load/import.
*/

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AnnouncementsComponent} from './views/announcements/announcements.component';
import {TeachersHomeComponent} from './views/teachers-home/teachers-home.component';
import {StudentsHomeComponent} from './views/students-home/students-home.component';
import {NavComponent} from './views/nav/nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatFormFieldModule, MatFormFieldControl} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';

import {
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatRadioModule,
    MatNativeDateModule,
    MatCardModule,
    MatStepperModule,
    MatSnackBarModule,
    MatTabsModule,
    MatDialogModule,
    MatPaginatorModule
} from '@angular/material';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {HttpClientModule} from '@angular/common/http';
import {ReversePipe} from './controllers/reverse.pipe';
import {AssignmentsComponent} from './views/assignments/assignments.component';
import {AddAssignmentComponent} from './views/add-assignment/add-assignment.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {DummyComponent} from './dummy/dummy.component';

import {AddAnnouncementComponent} from './views/add-announcement/add-announcement.component';
import {AddGradeComponent} from './views/add-grade/add-grade.component';
import {SubmitAssignmentComponent} from './views/submit-assignment/submit-assignment.component';
import {EditAnnouncementComponent} from './views/edit-announcement/edit-announcement.component';
import {EditAssignmentComponent} from './views/edit-assignment/edit-assignment.component';


@NgModule({
    declarations: [
        AppComponent,
        AnnouncementsComponent,
        TeachersHomeComponent,
        StudentsHomeComponent,
        NavComponent,
        ReversePipe,
        AssignmentsComponent,
        AddAssignmentComponent,
        DummyComponent,
        AddAnnouncementComponent,
        AddGradeComponent,
        SubmitAssignmentComponent,
        EditAnnouncementComponent,
        EditAssignmentComponent
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
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCardModule,
        MatStepperModule,
        MatSnackBarModule,
        MatTableModule,
        MatDialogModule,
        MatTabsModule,
        MatPaginatorModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    private static HttpModule: any;
}
