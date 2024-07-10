import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HotelapiService {
  //   private rapidApiKey = 'ac4281dbcamsh8dfbd438d61f5f1p1fce74jsnd32a7d10a64e';
  //   private locationApiUrl =
  //     'https://booking-com.p.rapidapi.com/v1/hotels/locations';
  //   private searchApiUrl = 'https://booking-com.p.rapidapi.com/v2/hotels/search';
  //   constructor(private http: HttpClient) {}
  //
  //   searchHotelsByLocation(
  //     locationName: string,
  //     searchParams: any
  //   ): Observable<any> {
  //     const headers = new HttpHeaders({
  //       'x-rapidapi-key': this.rapidApiKey,
  //       'x-rapidapi-host': 'booking-com.p.rapidapi.com',
  //     });
  //
  //     // First, fetch the destination ID
  //     return this.http
  //       .get<any>(this.locationApiUrl, {
  //         headers,
  //         params: { name: locationName, locale: 'en-gb' },
  //       })
  //       .pipe(
  //         switchMap((locationResponse: any) => {
  //           const destinationId =
  //             locationResponse?.locations?.[0]?.destination_id;
  //
  //           // If destination ID is retrieved, proceed with hotel search
  //           if (destinationId) {
  //             const searchHeaders = new HttpHeaders({
  //               'x-rapidapi-key': this.rapidApiKey,
  //               'x-rapidapi-host': 'booking-com.p.rapidapi.com',
  //             });
  //
  //             // Merge search parameters with destination ID
  //             const combinedParams = {
  //               ...searchParams,
  //               destination_id: destinationId,
  //             };
  //
  //             // Perform hotel search
  //             return this.http.get(this.searchApiUrl, {
  //               headers: searchHeaders,
  //               params: combinedParams,
  //             });
  //           } else {
  //             // Handle error or return null/empty observable as needed
  //             return new Observable<any>(); // Example of empty observable
  //           }
  //         })
  //       );
  //   }
}
