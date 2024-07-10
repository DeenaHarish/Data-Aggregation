import { Component, Input, OnInit } from '@angular/core';
import { HotelPhotoService } from '../hotel-photo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hotel-photo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotel-photo.component.html',
  styleUrl: './hotel-photo.component.scss',
})
export class HotelPhotoComponent implements OnInit {
  @Input() hotelId: string | undefined;
  photos: any[] = [];

  constructor(private hotelPhotoService: HotelPhotoService) {}

  ngOnInit(): void {
    this.fetchPhotos();
  }

  fetchPhotos(): void {
    if (this.hotelId) {
      this.hotelPhotoService.getHotelPhotos(this.hotelId).subscribe(
        (response: any) => {
          console.log('API Response:', response);
          this.photos = response;
        },
        (error: any) => {
          console.error('Error fetching photos', error);
        }
      );
    }
  }
}
