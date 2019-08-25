import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicComponent } from './basic/basic.component';
import { MarksComponent } from './marks/marks.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentFormComponent } from './student-form/student-form.component';

const routes: Routes = [
  { path: 'basicPage', component: BasicComponent},
  { path: 'marksPage/:sName', component: MarksComponent},
  { path: 'detailsPage/:sName', component: StudentDetailsComponent},
  { path: 'formPage', component: StudentFormComponent},
  { path: '', redirectTo: 'basicPage', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }