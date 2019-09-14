import { Component, OnInit, Input } from '@angular/core';
import { SchoolClass } from '../SchoolClass.model';
import { Router } from '@angular/router';
import { Student } from '../shared/Student';
import { RestApiService } from "../shared/rest-api.service";
import { OneClass } from '../shared/OneClass';


@Component({
  selector: 'app-single-class',
  templateUrl: './single-class.component.html',
  styleUrls: ['./single-class.component.css']
})

export class SingleClassComponent implements OnInit {

  @Input() selectedClass: SchoolClass;

  classTeacherName: string;
  className: string;
  ClassesList: OneClass[];
  selectedOneClass: OneClass;

  anyList: any = [];
  classStudentsObjList: Student[] =[];

  constructor(private router: Router, public restApi: RestApiService) {
    this.ClassesList = [
      {name:'8A'},
      {name:'8B'},
    ];
  }

  ngOnInit() {
    this.classTeacherName = this.selectedClass.classTeacher;
    this.className = this.selectedClass.className;
  }

  loadStudents() {
    console.log("triggered");
    return this.restApi.getStudents(this.selectedOneClass.name).subscribe((data: {}) => {
      this.anyList = data;
      this.classStudentsObjList = this.anyList;
      console.log("classStudentsObjList.length: "+this.classStudentsObjList.length);
    })
  }

}
