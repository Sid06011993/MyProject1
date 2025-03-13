import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {

number1:number=0;
number2:number=0;
result: number=0;

area(){
  console.log(this.number1,this.number2);
  this.result=this.number1 * this.number2;
  console.log(this.result);
}
peri(){
  console.log(this.number1,this.number2);
  this.result=2 * (this.number1 + this.number2);
  console.log(this.result);
}
}
