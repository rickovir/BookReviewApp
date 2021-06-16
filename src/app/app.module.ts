import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RatingModule } from 'ngx-bootstrap/rating';

import { AppComponent } from './app.component';
import { NewBookComponent } from './new-book/new-book.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BookListComponent } from './book-list/book-list.component';
import { BookReviewComponent } from './book-review/book-review.component';
import { FormsModule } from '@angular/forms';
import { NewReviewComponent } from './book-review/new-review/new-review.component';
import { ReviewListComponent } from './book-review/review-list/review-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewBookComponent,
    BookListComponent,
    BookReviewComponent,
    NewReviewComponent,
    ReviewListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    RatingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
