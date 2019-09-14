import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit{

  student = {firstName:"" , lastName:"", emailAddress:"", className:""}

  constructor(
    public restApi: RestApiService, 
    public router: Router
  ) { }

  ngOnInit() {
  }

  addStudent() {
      this.restApi.createStudent(this.student).subscribe((data: {}) => {
      this.router.navigate(['/basicPage'])
    })
  }
}
