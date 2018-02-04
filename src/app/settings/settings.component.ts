import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  city: string;
  code: string;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onEnter() {
    const location = {
      city: this.city,
      code: this.code
    };
    localStorage.setItem('location', JSON.stringify(location));
    this.route.navigate(['home']);
  }
}
