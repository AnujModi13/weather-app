import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Welcome } from '../model/weather';
@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private httpClient: HttpClient) {}

  getWeatherForcast(city:string): Observable<Welcome> {
    return this.httpClient.get<Welcome>(environment.baseUrl, {
        params: new HttpParams()
        .set('appid','21932cd9e992a7b05e858bae58e55dc5')
        .set('q',city)
        .set('units','metric')
    });
  }
}
