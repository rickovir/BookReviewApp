import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from '../book.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  @Output() onAddBook = new EventEmitter<Book>();
  book:Book = new Book();

  constructor() { }

  ngOnInit(): void {
  }

  submit()
  {
    this.onAddBook.emit(this.book);
    this.book = new Book();
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Add Book Successfully!',
    })
  }
}
