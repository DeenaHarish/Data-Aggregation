import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-facilities',
  standalone: true,
  imports: [],
  templateUrl: './hotel-facilities.component.html',
  styleUrl: './hotel-facilities.component.scss',
})
export class HotelFacilitiesComponent {
  constructor() {}
  img_room = '/assets/Room.svg';
  img_dining = '/assets/dinning.svg';
  img_conf_meeting = '/assets/conference.svg';
  img_service = '/assets/Service & Facilities.svg';
  img_wedding = '/assets/Wedding Package.svg';
}
