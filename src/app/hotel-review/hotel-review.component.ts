import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HotelReviewService } from '../hotel-review.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hotel-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotel-review.component.html',
  styleUrl: './hotel-review.component.scss',
})
export class HotelReviewComponent implements OnChanges {
  @Input() hotelId!: number;
  @Input() pageNumber!: number;
  reviews: any[] = [];

  constructor(private hotelReviewService: HotelReviewService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['hotelId'] || changes['pageNumber']) {
      // Use bracket notation here
      this.loadReviews();
    }
  }

  loadReviews(): void {
    if (this.hotelId && this.pageNumber !== undefined) {
      this.hotelReviewService
        .getHotelReviews(this.hotelId, this.pageNumber)
        .subscribe(
          (data) => {
            this.reviews = data.result;
            console.log(this.reviews);
          },
          (error) => {
            console.error('Error fetching reviews:', error);
          }
        );
    }
  }
}
