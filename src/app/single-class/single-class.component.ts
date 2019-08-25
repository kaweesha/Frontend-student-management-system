import { Component, OnInit, Input } from '@angular/core';
import { SchoolClass } from '../SchoolClass.model';
import { Router } from '@angular/router';
import { Student } from '../shared/Student';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-single-class',
  templateUrl: './single-class.component.html',
  styleUrls: ['./single-class.component.css']
})
export class SingleClassComponent implements OnInit {

  @Input() selectedClass: SchoolClass;

  classTeacherName: string;
  className: string;

  anyList: any = [];
  classStudentsObjList: Student[] =[];

  constructor(private router: Router, public restApi: RestApiService) {}

  ngOnInit() {
    this.classTeacherName = this.selectedClass.classTeacher;
    this.className = this.selectedClass.className;
    this.loadStudents();
  }

  loadStudents() {
    return this.restApi.getStudents().subscribe((data: {}) => {
      this.anyList = data;
      this.classStudentsObjList = this.anyList;
      console.log("classStudentsObjList.length: "+this.classStudentsObjList.length);
    })
  }

}
