import { Component } from '@angular/core';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent {

  constructor(private bookService: BookService){

  }

  infoFormMod(title: string, genre: string, price: number, author: string, url_foto: string, id_libro: number, id_user: number): void {
    const updatedBook = {
      id_book: id_libro,
      id_user: id_user,
      title: title,
      type: genre,
      price: price,
      author: author,
      photo: url_foto
    };

    this.bookService.editBook(updatedBook);
  }

}