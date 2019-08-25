import { Component, OnInit } from '@angular/core';
import { GetStudentService } from '../services/getStudent.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  private selectedStudentDetails: Subscription;
  private student: string;
  private studentDetails: string[];
  private detailTableHeadings: string[] = ['HomeTown', 'Father\'s Name','Mother\'s Name'];

  constructor(private getStudentService: GetStudentService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.selectedStudentDetails = this.activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.student = params.get('sName');
      }
    )
    console.log("student: " + this.student);

    this.studentDetails = this.getStudentService.getDetails(this.student);
    console.log("studentDetails: "+this.studentDetails);

    // this.selectedStudentDetails = this.getStudentService.selectedStudentDetails.subscribe(
    //   (student: string) => {
    //     this.student = student;
    //     console.log("selected student: "+ this.student);
    //     this.studentDetails = this.getStudentService.getDetails(student);
    //     console.log(this.studentDetails);
    //   }
    // );
  }

}
