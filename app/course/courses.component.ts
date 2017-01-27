import { Component } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'courses',
  template: `<h1>Courses</h1>
  {{title}}
  <ul>
    <li *ngFor="let c of courses">{{c}}</li>
  `
})

export class CoursesComponent {
  title = "The title of the courses page";
  courses;

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }
}