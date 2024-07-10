import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SearchByLocationComponent } from '../search-by-location/search-by-location.component';
import { HotelFacilitiesComponent } from '../hotel-facilities/hotel-facilities.component';
import { BestOfferComponent } from '../best-offer/best-offer.component';
import { FooterComponent } from '../footer/footer.component';
import { SpecialOffersComponent } from '../special-offers/special-offers.component';
import { DummyComponent } from '../dummy/dummy.component';
import { SearchByLocationService } from '../search-by-location.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SearchByLocationComponent,
    HotelFacilitiesComponent,
    BestOfferComponent,
    FooterComponent,
    SpecialOffersComponent,
    DummyComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  toggle_div: boolean = false;
  constructor(private searchbylocation: SearchByLocationService) {
    this.searchbylocation.get_display_div().subscribe((res: boolean) => {
      console.log(res);
      if (res) {
        this.toggle_div = res;
      } else {
        this.toggle_div = false;
      }
    });
  }
}
