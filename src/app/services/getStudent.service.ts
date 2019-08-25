import { EventEmitter, Injectable}  from '@angular/core';

@Injectable()
export class GetStudentService {
    students: string[] = ['John', 'Jane', 'Tom', 'Tim'];
    class8A_marks: number[][] = [[65,76,80],[85,90,70],[55,57,70],[75,77,87]];
    class8A_details: string[][] = [['Gampaha','Mr. De Silva', 'Mrs. De Silva'],['Colombo','Mr. Gunasekara', 'Mrs. Gunasekara'],['Maharagama','Mr. Ranasinghe','Mrs. Ranasinghe'],['Nugegoda','Mr. Weerasena','Mrs. Weerasena']];
    selectedStudentIndex: number;

    selectedStudentMarks = new EventEmitter<string>();
    selectedStudentDetails = new EventEmitter<string>();

    getMarks(studentName: string) {
        this.selectedStudentIndex = this.students.indexOf(studentName);
        console.log("index: "+ this.selectedStudentIndex);
        return this.class8A_marks[this.selectedStudentIndex];
    }

    getDetails(studentName: string) {
        this.selectedStudentIndex = this.students.indexOf(studentName);
        console.log("index: "+ this.selectedStudentIndex);
        return this.class8A_details[this.selectedStudentIndex];
    }
}