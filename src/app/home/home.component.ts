import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  location = {
    city: 'paris',
    code: 'fr'
  };
  weather: any;
  value: any;
  constructor(private weatherService: SettingsService) { }

  ngOnInit() {
    this.value = localStorage.getItem('location');
    if (this.value != null) {
      this.location = JSON.parse(this.value);
    } else {
      this.location = {
        city: 'paris',
        code: 'fr'
      };
    }

    this.weatherService.getWeather(this.location.city, this.location.code)
    .subscribe((response) => {
      console.log(response);
      this.weather = response;
    });
  }
}

