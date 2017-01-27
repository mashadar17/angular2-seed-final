import { Component } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
  selector: 'authors',
  templateUrl: './app/author/author.template.html'
})

export class AuthorsComponent {
  title = "The title of the Authors page";
  authors;
  constructor(authorService: AuthorService) {
    this.authors = authorService.getAuthors();
  }
}