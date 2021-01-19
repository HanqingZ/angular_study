import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NewCourseComponent } from './new-course/new-course.component';

const routes: Routes = [
  {
    path: '',
    component: NewCourseComponent
  }
];

@NgModule({
  declarations: [
    NewCourseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [
    RouterModule,
    NewCourseComponent
  ]
})

export class AddCourseModule {}
