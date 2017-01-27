import { Component } from '@angular/core';
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
  courses = ["course 1", "course 2", "course 3"];
}