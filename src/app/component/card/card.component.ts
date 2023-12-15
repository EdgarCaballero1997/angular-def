import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() book: Book;
  @Output() deleteBook: EventEmitter<number> = new EventEmitter<number>();

  constructor(){
    
  }

  onDeleteClick(){
    this.deleteBook.emit(this.book.id_book);
  }

}