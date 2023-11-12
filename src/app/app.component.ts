import { Component, OnInit } from '@angular/core';
import { APIService } from './service/api.service';
import { Welcome } from './model/weather';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'weather-app';
  weather!: Welcome;
  city = 'mumbai' ;
  searchItem: string='';
  constructor(private apiservice: APIService) {}

  ngOnInit()
  {
    this.apiservice.getWeatherForcast(this.city).subscribe({next :(data)=>{
    console.log(data)
    this.weather=data;
  }})
  }

  withCity( ){
    this.apiservice.getWeatherForcast(this.searchItem).subscribe({next :(data)=>{
      console.log(data)
      this.weather=data;
    }})
  }

}
