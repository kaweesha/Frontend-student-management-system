import { Component, OnInit, Input } from '@angular/core';
import { GetStudentService } from '../services/getStudent.service';
import { Router } from '@angular/router';
import { Student } from '../shared/Student';

@Component({
  selector: 'app-single-student',
  templateUrl: './single-student.component.html',
  styleUrls: ['./single-student.component.css']
  // providers:[GetStudentService]
})
export class SingleStudentComponent implements OnInit {

  @Input() studentObj: Student;

  constructor(private getStudentService: GetStudentService, private router: Router) { }

  ngOnInit() {
  }

  studentMarksSelected() {
    // console.log("selected student: "+this.studentName);
    // this.getStudentService.selectedStudentMarks.emit(this.studentName);
    console.log("here");

    // this.router.navigateByUrl('/marksPage', { queryParams: { sName: this.studentName} });
    // this.router.navigateByUrl('/marksPage');
  }

  studentDetailsSelected() {
    this.getStudentService.selectedStudentDetails.emit(this.studentObj.firstName);
    // this.getStudentService.selectedStudentDetails.emit(this.studentName);
    this.router.navigate(['/detailsPage']);
  }

}
