import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AssignmentsService} from '../../models/assignments.service';
import {SubmittedAssignment} from '../../models/submittedAssignment';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-submit-assignment',
  templateUrl: './submit-assignment.component.html',
  styleUrls: ['./submit-assignment.component.sass']
})
export class SubmitAssignmentComponent implements OnInit {

  assignment: SubmittedAssignment;
  assignmentId: string;
  studentId: number;
  date: Date;
  submitAssignmentForm = this.fb.group( {
    submission: [null],
  });
  success = '';
  error = '';
  grade: number;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private assignmentServ: AssignmentsService) {
    this.assignmentId = this.route.snapshot.paramMap.get('id');
    this.studentId = 7;
    this.date = new Date();
    this.grade = 0;
  }
  ngOnInit() {
  }

  onSubmit() {
    console.log(this.submitAssignmentForm);
    const args = {
      assignmentId: this.assignmentId,
      studentId: this.studentId,
      date: this.date,
      submission: this.submitAssignmentForm.value.submission,
      grade: this.grade
    };

    const assignment = new SubmittedAssignment(args);
    this.assignmentServ.submitAssignment(assignment).subscribe(
        (res: SubmittedAssignment) => {
          this.assignment = res;
          this.success = 'Assignment Submitted Successfully';
          console.log('Heres whats been submitted' + this.assignment);
          this.submitAssignmentForm.reset();
        },
        (err) => {
          console.log('Error in submitting assignment');
          this.error = err;
        }
    );
    this.router.navigateByUrl('/home');
  }

}
