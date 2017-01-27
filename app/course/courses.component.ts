import { Component } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'courses',
  templateUrl: './app/course/course.template.html'
})

export class CoursesComponent {
  title = "The title of the courses page";
  courses;
  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }
}
