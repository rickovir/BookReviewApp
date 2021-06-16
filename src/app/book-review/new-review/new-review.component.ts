import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Review } from 'src/app/book.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {
  newReview:Review = new Review();
  @Output() onAddReview = new EventEmitter<Review>();

  constructor() { }

  ngOnInit(): void {
  }

  submitReview()
  {
    this.onAddReview.emit(this.newReview);
    this.newReview = new Review();
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Review has been added !',
    })
  }

}
