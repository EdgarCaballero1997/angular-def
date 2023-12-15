import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[];

  constructor() {
    this.books = [
      new Book(1, 1, 'El Señor de los Anillos', 'Aventura', 'J. R. R. Tolkien', 29.99, 'https://www.planetadelibros.com/usuaris/libros/thumbs/0b7a8e80-7061-46a5-abd4-21800accda6b/d_1200_1200/portada_el-senor-de-los-anillos-n-0203-las-dos-torres-ne_j-r-r-tolkien_202210071215.webp'),
      new Book(2, 1, 'Harry Potter', 'Aventura', 'J. K. Rowling', 14.55, 'https://www.1001hobbies.es/1497135-large_default/fanattik-fntk-thg-hp47-litografia-de-harry-potter-reliquias-de-la-muer.jpg'),
      new Book(3, 1, 'Los Pilares de la Tierra', 'Drama', 'Ken Follet', 31.90, 'https://covers.feedbooks.net/item/3913456.jpg?size=large&t=1615320282')
    ];
  }

  public getAllBooks(): Book[] {
    return this.books;
  }

  public getOneBook(id_book: number): Book {
    return this.books.find(book => book.id_book === id_book);
  }

  public addBook(book: Book): void {
    this.books.push(book);
    alert('¡Libro añadido!');
  }

  public editBook(updatedBook: Book): void {
    const index = this.books.findIndex(
      (book) => book.id_book === updatedBook.id_book
    );
    if (index !== -1) {
      this.books[index] = updatedBook;
    }
  }

  public deleteBook(id_book: number): void {
    this.books = this.books.filter(book => book.id_book !== id_book);
  }

}