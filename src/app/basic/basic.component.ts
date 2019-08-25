import { Component, OnInit } from '@angular/core';
import { SchoolClass} from '../SchoolClass.model';
import { GetStudentService } from '../services/getStudent.service';
import { RestApiService } from "../shared/rest-api.service";
import { Student } from '../shared/Student';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  studentsList: any = [];
  studentsObjList: Student[] = [];
  studentNamesList: string[] = [];

  newClass = new SchoolClass('8A', 'Mr. A. C. Perera', this.studentsObjList);
  // newClass = new SchoolClass('8A', 'Mr. A. C. Perera', this.studentNamesList);

  constructor(private getStudentService: GetStudentService, public restApi: RestApiService) {}

  ngOnInit() {
    // this.loadStudents();
  }

  // Get students list
  // loadStudents() {
  //   return this.restApi.getStudents().subscribe((data: {}) => {
  //     this.studentsList = data;
  //     this.studentsObjList = this.studentsList;
  //     this.newClass.studentsList = this.studentsObjList;
      // this.getStudentNames();
  //   })
  // }

  // create student names list
  // getStudentNames() {
  //   this.studentsList.forEach(element => {
  //     console.log(element.firstName);
  //     this.studentNamesList.push(element.firstName);
  //   });
  // }

}
