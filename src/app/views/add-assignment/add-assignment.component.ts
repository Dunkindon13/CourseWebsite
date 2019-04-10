import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import {FormControl} from '@angular/forms';
import {AssignmentsService} from '../../models/assignments.service';
import {ActivatedRoute} from '@angular/router';
import {Assignment} from '../../models/assignment';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  assignments: Assignment[];
  addAssignmentForm = this.fb.group({
    title: [null],
    releaseDate: [null],
    dueDate: [null],
    body: [null]});
  success = '';
  error = '';

  constructor(private fb: FormBuilder,
              private assignmentServ: AssignmentsService,
              private route: ActivatedRoute) { }

  ngOnInit() {

  }

  onSubmit() {
    alert('Thanks!');
    console.log(this.addAssignmentForm);
    const args = {
      title: this.addAssignmentForm.value.title,
      releaseDate: this.addAssignmentForm.value.releaseDate,
      dueDate: this.addAssignmentForm.value.dueDate,
      body: this.addAssignmentForm.value.body,
      weight: 0
    };

    const assignment = new Assignment(args);
    this.assignmentServ.addAssignment(assignment).subscribe(
        (res: Assignment[]) => {
          this.assignments = res;
          this.success = 'Assignment Created Successfully!';

          this.addAssignmentForm.reset();
        },
        (err) => {
          this.error = err;
        }
    );
  }
}
