import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HotelPhotoService {
  private apiUrl = 'https://booking-com.p.rapidapi.com/v1/hotels/photos';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': 'ac4281dbcamsh8dfbd438d61f5f1p1fce74jsnd32a7d10a64e',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
  });

  constructor(private http: HttpClient) {}

  getHotelPhotos(hotelId: string, locale: string = 'en-gb'): Observable<any> {
    const url = `${this.apiUrl}?hotel_id=${hotelId}&locale=${locale}`;
    return this.http.get<any>(url, { headers: this.headers });
  }
}
