import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input('data') bookList:Book[] = [];
  @Output() onSelectedIndex = new EventEmitter<number>();
  @Input() activeIndex:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  selectedIndex(index:number)
  {
    this.onSelectedIndex.emit(index);
  }

  exportToJson(){
    var theJSON = JSON.stringify(this.bookList);
    var uri = "data:application/json;charset=UTF-8," + encodeURIComponent(theJSON);

    var a = document.createElement('a');
    var file = new Blob([theJSON], {type: "data:application/json;charset=UTF-8"});
    a.href = URL.createObjectURL(file);
    a.download = "books.json";
    a.click();
  }
}
