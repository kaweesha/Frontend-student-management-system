import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SingleClassComponent } from './single-class/single-class.component';
import { SingleStudentComponent } from './single-student/single-student.component';
import { MarksComponent } from './marks/marks.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { BasicComponent } from './basic/basic.component';
import { StudentFormComponent } from './student-form/student-form.component';

import {InputTextModule} from 'primeng/inputtext';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    SingleClassComponent,
    SingleStudentComponent,
    MarksComponent,
    StudentDetailsComponent,
    BasicComponent,
    StudentFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
