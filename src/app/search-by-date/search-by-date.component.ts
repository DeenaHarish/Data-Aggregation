import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { SearchByDateService } from '../search-by-date.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-by-date',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-by-date.component.html',
  styleUrl: './search-by-date.component.scss',
})
export class SearchByDateComponent implements OnInit {
  @Input() destinationId: string | undefined;
  title = 'Data-Aggregation';
  hotels: any[] = [];
  // location: string = 'New York';
  checkInDate: string = ''; // Initialize to empty string
  checkOutDate: string = ''; // Initialize to empty string
  hotel_id: any;

  constructor(
    private searchbydate: SearchByDateService,
    private cd: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.cd.detectChanges();
  }

  searchHotels() {
    // Check if check-in and check-out dates are provided
    if (!this.checkInDate || !this.checkOutDate) {
      console.error('Please enter both check-in and check-out dates.');
      return;
    }

    const searchParams = {
      // children_number: 2,
      locale: 'en-gb',
      // children_ages:0,
      filter_by_currency: 'AED',
      checkin_date: this.checkInDate,
      // categories_filter_ids: 'class::2,class::4,free_cancellation::1',
      dest_type: 'city',
      dest_id: this.destinationId,
      adults_number: 2,
      checkout_date: this.checkOutDate,
      order_by: 'popularity',
      include_adjacency: true,
      room_number: 1,
      units: 'metric',
      // Add any other parameters as needed
    };
    console.log(searchParams);
    this.searchbydate.searchHotels(searchParams).subscribe(
      (data) => {
        console.log(data);
        this.hotels = data.results;
        console.log(this.hotels, 'hotel'); // Adjust this based on the actual response structure
      },
      (error) => {
        console.error('Error fetching hotel data:', error);
      }
    );
  }
  get_destination(e: any) {
    console.log(e);
  }
}
//   @Input() destinationId: string | undefined;
//   title = 'Data-Aggregation';
//   hotels: any[] = [];
//   checkInDate: string = ''; // Initialize to empty string
//   checkOutDate: string = ''; // Initialize to empty string
//
//   constructor(private searchbydate: SearchByDateService) {}
//
//   searchHotels() {
//     // Check if check-in and check-out dates are provided
//     if (!this.checkInDate || !this.checkOutDate) {
//       console.error('Please enter both check-in and check-out dates.');
//       return;
//     }
//
//     const searchParams = {
//       locale: 'en-gb',
//       filter_by_currency: 'AED',
//       checkin_date: this.checkInDate,
//       dest_id: this.destinationId, // Use destinationId as the location
//       dest_type: 'city',
//       adults_number: 2,
//       checkout_date: this.checkOutDate,
//       order_by: 'popularity',
//       include_adjacency: true,
//       room_number: 1,
//       units: 'metric',
//       // Add any other parameters as needed
//     };
//
//     this.searchbydate.searchHotels(searchParams).subscribe(
//       (data) => {
//         console.log(data);
//         this.hotels = data.results; // Assuming 'results' contains the list of hotels
//         console.log(this.hotels, 'hotel'); // Adjust based on the actual response structure
//       },
//       (error) => {
//         console.error('Error fetching hotel data:', error);
//       }
//     );
//   }
// }
