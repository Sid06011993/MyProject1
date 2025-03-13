import { Component } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent {
temperature:number=0;
result:number=0;
  temp(){
this.result=(this.temperature * 1.8) + 32
}
}
