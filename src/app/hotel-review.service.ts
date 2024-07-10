import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HotelReviewService {
  private apiUrl = 'https://booking-com.p.rapidapi.com/v1/hotels/reviews';
  private apiKey = 'ac4281dbcamsh8dfbd438d61f5f1p1fce74jsnd32a7d10a64e'; // Add your X-Rapidapi-Key here

  constructor(private http: HttpClient) {}

  getHotelReviews(hotelId: number, pageNumber: number): Observable<any> {
    const params = new HttpParams()
      .set('customer_type', 'solo_traveller,review_category_group_of_friends')
      .set('locale', 'en-gb')
      .set('sort_type', 'SORT_MOST_RELEVANT')
      .set('language_filter', 'en-gb,de,fr')
      .set('hotel_id', hotelId.toString())
      .set('page_number', pageNumber.toString());

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
    });

    return this.http.get<any>(this.apiUrl, { headers, params });
  }
}
