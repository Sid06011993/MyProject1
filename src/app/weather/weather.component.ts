import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  currentWeather: any={};
  constructor(private _weatherService:WeatherService) {
    _weatherService.getWeather().subscribe(
      (data:any)=>{
        console.log(data);
        this.currentWeather=data;
      },(err:any)=>{
        alert("Internal Server Error");
      }
    )
  }
}
