import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchByLocationService {
  private rapidApiKey = 'ac4281dbcamsh8dfbd438d61f5f1p1fce74jsnd32a7d10a64e';
  private apiUrl = 'https://booking-com.p.rapidapi.com/v1/hotels/locations';

  constructor(private http: HttpClient) {}

  getDestinationId(locationName: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-key': this.rapidApiKey,
      'x-rapidapi-host': 'booking-com.p.rapidapi.com',
    });

    return this.http.get<any>(this.apiUrl, {
      headers,
      params: { name: locationName, locale: 'en-gb' },
    });
  }
  private display_div = new BehaviorSubject<boolean>(false);
  send_display_div(val: boolean) {
    this.display_div.next(val);
  }
  get_display_div(): Observable<boolean> {
    return this.display_div.asObservable();
  }
}
