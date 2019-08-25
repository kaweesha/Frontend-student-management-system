import { Component, OnInit, AfterContentInit } from '@angular/core';
import { GetStudentService } from '../services/getStudent.service';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {
  private selectedStudentMarks: Subscription;
  private student: string;
  private stdIndex: number;
  private studentMarks: number[] = [0,0,0];
  private marksTableHeadings: string[] = ['Mathematics','Science','English'];

  constructor(private getStudentService: GetStudentService, private activatedRoute: ActivatedRoute) {
   }

  ngOnInit() {

    // this.selectedStudentMarks = this.activatedRoute
    // .queryParams
    // .subscribe(params => {
    //   // Defaults to 0 if no query param provided.
    //   this.stdIndex = params['sName'] || 0;
    // })

    this.selectedStudentMarks = this.activatedRoute.paramMap.subscribe(
      ( params: ParamMap) => {
        this.student = params.get('sName');
      }
    )
    console.log("student: " + this.student);

    this.studentMarks = this.getStudentService.getMarks(this.student);
    console.log("studentMarks: "+this.studentMarks);


    // this.router.queryParams.subscribe(
    //   (queryParams: Params) => {
    //       this.data = this.getStudentService[queryParams['index']];
    //   }
    // );

    // this.state$ = this.activatedRoute.paramMap
    //   .pipe(() => window.history.state)
      // this.selectedStudentMarks = this.state$.subscribe(

    // this.selectedStudentMarks = this.getStudentService.selectedStudentMarks.subscribe(
    //   (student: string) => {
    //     this.student = student;
    //     console.log("selected student: "+ this.student);
    //     this.studentMarks = this.getStudentService.getMarks(student);
    //     console.log(this.studentMarks);
    //   });
  }

  // ngOnDestroy() {
  //   this.selectedStudentMarks.unsubscribe();
  // }

}
