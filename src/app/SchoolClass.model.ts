import { Student } from './shared/Student';

export class SchoolClass {
    public className: string;
    public classTeacher: string;
    public studentsList: Student[];

    constructor(className: string, classTeacher: string, studentsList: Student[]){
        this.className = className;
        this.classTeacher = classTeacher;
        this.studentsList = studentsList;
    }
}