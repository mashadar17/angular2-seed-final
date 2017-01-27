import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { CoursesComponent } from './course/courses.component';
import { CourseService } from './course/course.service';

import { AuthorsComponent } from './author/authors.component';
import { AuthorService } from './author/author.service';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, CoursesComponent, AuthorsComponent],
    bootstrap: [AppComponent],
    providers: [CourseService, AuthorService]
})
export class AppModule { }
