import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/book.model';

@Component({
  selector: 'review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  @Input() bookName:string = "";
  @Input('data') reviewList:Review[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
