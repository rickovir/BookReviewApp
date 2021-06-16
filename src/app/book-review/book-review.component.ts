import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../book.model';

@Component({
  selector: 'book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.css']
})
export class BookReviewComponent implements OnInit {
  @Input('data') reviewList:Review[] = [];
  @Input() bookName:string = "";

  constructor() { }

  ngOnInit(): void {
  }
  
  addReviewHandler(event:Review)
  {
    this.reviewList.push(event);
  }
}
