import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchByDateService {
  private apiUrl = 'https://booking-com.p.rapidapi.com/v2/hotels/search';
  private apiKey = 'ac4281dbcamsh8dfbd438d61f5f1p1fce74jsnd32a7d10a64e'; // Replace with your RapidAPI key

  constructor(private http: HttpClient) {}

  searchHotels(params: any): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-key': this.apiKey,
      'x-rapidapi-host': 'booking-com.p.rapidapi.com',
    });

    return this.http.get(this.apiUrl, { headers, params });
  }
}
