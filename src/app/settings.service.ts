import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SettingsService {
  apiKey = '0194d5bd8adc1b7e0a926b3a92034b80';
  url;
  constructor(private http: Http) {
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  }

  getWeather(city, code) {
    return this.http.get(this.url + city + ',' + code + '&APPID=' + this.apiKey)
    .map((res) => res.json());
  }
}
