import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './Student';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  

export class RestApiService {

  // Define API
  apiURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

    /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

    // Http Options
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:8080'
        })
    } 

    // HttpClient API get() method => fetch student list
    getStudents(): Observable<Student> {
        return this.http
          .get<Student>(this.apiURL + '/Student-Management-System/api/students')
          .pipe(retry(1),
          catchError(this.handleError))
      }

      // HttpClient API get() method => fetch single student by id
      getSingleStudent(id): Observable<Student> {
        return this.http
          .get<Student>(this.apiURL + '/Student-Management-System/api/students' + id)
          .pipe(retry(1),
          catchError(this.handleError))
      }

      // HttpClient API post() method => create student
      createStudent(student): Observable<Student> {
        return this.http
          .post<Student>(this.apiURL + '/Student-Management-System/api/students', JSON.stringify(student), this.httpOptions)
          .pipe(retry(1), 
          catchError(this.handleError))
      }

      // HttpClient API put() method => update student
      updateStudent(student): Observable<Student> {
        return this.http
          .put<Student>(this.apiURL + '/Student-Management-System/api/students', JSON.stringify(student), this.httpOptions)
          .pipe(retry(1), 
          catchError(this.handleError))
      }

      // HttpClient API delete() method => Delete employee
      deleteEmployee(id){
        return this.http
          .delete<Student>(this.apiURL + '/Student-Management-System/api/students' + id, this.httpOptions )
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