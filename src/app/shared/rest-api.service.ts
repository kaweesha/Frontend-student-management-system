import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Student } from './Student';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Teacher } from './Teacher';

@Injectable({
    providedIn: 'root'
  })
  

export class RestApiService {

  // Define API
  apiURL = 'http://localhost:8080';
  apiPart = '/Student-Management-System/api/';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8080'
      })
  } 

  // HttpClient API get() method => fetch student list by className
  getStudents(className): Observable<Student> {
    let params = new HttpParams().set('className', className);
    console.log(className);

    return this.http
      .get<Student>(this.apiURL + this.apiPart + 'students', { params: params })
      .pipe(retry(1),
      catchError(this.handleError))
  }

  // HttpClient API get() method => fetch single student by id
  getSingleStudent(id): Observable<Student> {
    return this.http
       .get<Student>(this.apiURL + this.apiPart + 'students' + id)
       .pipe(retry(1),
       catchError(this.handleError))
  }

  // HttpClient API post() method => create student
  createStudent(student): Observable<Student> {
    return this.http
      .post<Student>(this.apiURL + this.apiPart + 'students', JSON.stringify(student), this.httpOptions)
      .pipe(retry(1), 
      catchError(this.handleError))
  }

  // HttpClient API put() method => update student
  updateStudent(student): Observable<Student> {
    return this.http
      .put<Student>(this.apiURL + this.apiPart + 'students', JSON.stringify(student), this.httpOptions)
      .pipe(retry(1), 
      catchError(this.handleError))
  }

  // HttpClient API delete() method => Delete student
  deleteEmployee(id){
    return this.http
      .delete<Student>(this.apiURL + this.apiPart + 'students' + id, this.httpOptions )
      .pipe(retry(1), 
      catchError(this.handleError))
  }

  // HttpClient API get() method => fetch single teacher by className
  getSingleTeacher(className): Observable<Teacher> {
    return this.http
        .get<Teacher>(this.apiURL + this.apiPart + 'teachers/' + className)
        .pipe(retry(1),
        catchError(this.handleError))
  }

  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}