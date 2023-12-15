import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/service/book.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {

  public books: Book[];

  constructor(private bookService: BookService){
    // this.books = [
    //   new Book(1, 1, 'El Señor de los Anillos', 'Aventura', 'J. R. R. Tolkien', 29.99, 'https://www.planetadelibros.com/usuaris/libros/thumbs/0b7a8e80-7061-46a5-abd4-21800accda6b/d_1200_1200/portada_el-senor-de-los-anillos-n-0203-las-dos-torres-ne_j-r-r-tolkien_202210071215.webp'),
    //   new Book(2, 1, 'Harry Potter', 'Aventura', 'J. K. Rowling', 14.55, 'https://www.1001hobbies.es/1497135-large_default/fanattik-fntk-thg-hp47-litografia-de-harry-potter-reliquias-de-la-muer.jpg'),
    //   new Book(3, 1, 'Los Pilares de la Tierra', 'Drama', 'Ken Follet', 31.90, 'https://covers.feedbooks.net/item/3913456.jpg?size=large&t=1615320282')
    // ];
  }

  infoFormCard(titulo: string, genero: string, precio: number, autor: string, url_foto: string, id_libro: number, id_user: number){
    let newBook = new Book(id_libro, id_user, titulo, genero, autor, precio, url_foto);
    this.bookService.addBook(newBook);
  }

}