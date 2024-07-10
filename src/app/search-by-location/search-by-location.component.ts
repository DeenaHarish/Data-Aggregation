import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchByLocationService } from '../search-by-location.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchByDateService } from '../search-by-date.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-by-location',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './search-by-location.component.html',
  styleUrl: './search-by-location.component.scss',
})
export class SearchByLocationComponent implements OnInit {
  locationName: string = '';
  checkin: string = '';
  checkout: string = '';
  destinationId: string | undefined = undefined;
  errorMessage: string | undefined = undefined;
  hotels: any[] = [];

  @Output() destinationIdEmitter = new EventEmitter<string>();

  constructor(
    private searchbylocation: SearchByLocationService,
    private searchbydate: SearchByDateService,
    private router: Router
  ) {}

  getDestId() {
    this.searchbylocation.getDestinationId(this.locationName).subscribe(
      (response) => {
        if (response && response.length > 0) {
          this.destinationId = response[0].dest_id; // Assuming the first item is the desired location
          this.destinationIdEmitter.emit(this.destinationId);
          const searchParams = {
            // children_number: 2,
            locale: 'en-gb',
            // children_ages:0,
            filter_by_currency: 'AED',
            checkin_date: this.checkin,
            // categories_filter_ids: 'class::2,class::4,free_cancellation::1',
            dest_type: 'city',
            dest_id: this.destinationId,
            adults_number: 2,
            checkout_date: this.checkout,
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
              console.log(this.hotels, 'hotel');
              this.searchbylocation.send_display_div(true);
              // this.router.navigate(['/searchresult'], {
              //   queryParams: {
              //     location: this.locationName,
              //     destId: this.destinationId,
              //   },
              // }); // Adjust this based on the actual response structure
            },
            (error) => {
              console.error('Error fetching hotel data:', error);
            }
          );
        } else {
          this.destinationId = 'No destination ID found';
        }
      },
      (error) => {
        this.errorMessage = 'Error fetching data';
        console.error('Error fetching data:', error);
      }
    );
  }
  ngOnInit(): void {}

  navigateToResult() {
    // Navigate to the 'result' route
    this.router.navigate(['/result']);
  }
}
