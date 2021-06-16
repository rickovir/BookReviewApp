import { Component } from '@angular/core';
import { Book, initialBook } from './book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books:Book[] = [];
  selectedIndex = 0;

  constructor(){
  }

  addBookHandler(event:Book)
  {
    this.books.push(event);
  }

  selectedIndexHandler(index:number)
  {
    this.selectedIndex = index;
  }
}
