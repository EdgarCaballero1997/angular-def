import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public books: Book[];
  public searchedBook: Book;
  public showEmptyLibraryMessage = false;

  constructor(private bookService: BookService){
    
  }

  ngOnInit(): void {
    this.books = this.bookService.getAllBooks();
    this.showEmptyLibraryMessage = this.books.length === 0;
  }

  public info_idBook(id_book: number){
    this.searchedBook = this.bookService.getOneBook(id_book);
  }

  public eliminarLibro(idLibro: number) {
    this.bookService.deleteBook(idLibro);
    this.books = this.bookService.getAllBooks();
    this.showEmptyLibraryMessage = this.books.length === 0;
  }

}