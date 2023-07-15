import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { weather1 } from '../model/weather';
@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private httpClient: HttpClient) {}

  getWeatherForcast(city:string): Observable<weather1> {
    return this.httpClient.get<weather1>(environment.baseUrl, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostlabel, environment.XRapidAPIHostvalue)
        .set(environment.XRapidAPIKeylabel, environment.XRapidAPIKeyvalue),
        params: new HttpParams()
        .set('q',city)
    });
  }
}
