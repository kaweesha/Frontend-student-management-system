import { Component } from '@angular/core';
import { SchoolClass} from './SchoolClass.model';
import { GetStudentService } from './services/getStudent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GetStudentService]
})
export class AppComponent {
  title = 'School';

  // newClass = new SchoolClass('8A', 'Mr. A. C. Perera', ['John', 'Jane', 'Tom', 'Tim']);
  // constructor() {}

  constructor(private getStudentService: GetStudentService) {}
}
