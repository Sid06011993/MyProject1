import { Component } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  flipkarts:any=[];
  constructor(private _flipkartService:FlipkartService){
    _flipkartService.getFlipkartapi().subscribe(
      (data:any)=>{
        console.log(data);
        this.flipkarts=data;
        console.log(this.flipkarts);
      },(err:any)=>{
        alert("Internal Server Error");
      }
)}
}
