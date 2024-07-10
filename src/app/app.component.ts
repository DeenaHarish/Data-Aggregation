import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchByDateComponent } from './search-by-date/search-by-date.component';
import { SearchByLocationComponent } from './search-by-location/search-by-location.component';
import { HotelPhotoComponent } from './hotel-photo/hotel-photo.component';
import { HotelReviewComponent } from './hotel-review/hotel-review.component';
import { LayoutComponent } from './layout/layout.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SearchByDateComponent,
    SearchByLocationComponent,
    HotelPhotoComponent,
    HotelReviewComponent,
    LayoutComponent,
    SearchBarComponent,
    HeaderComponent,
    MainComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  //   title = 'Data-Aggregation';
  //   selectedHotelId: number = 1676161;
  //   currentPageNumber: number = 1;
  //   destinationId: string | undefined;
  //
  //   handleDestinationId(destId: string) {
  //     this.destinationId = destId;

  //   }
  selectedDestinationId: string | undefined;

  constructor() {
    // Initialize selectedDestinationId if needed
    this.selectedDestinationId = '';
  }
}
