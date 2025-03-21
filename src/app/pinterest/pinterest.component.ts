import { Component } from '@angular/core';
import { PinterestService } from '../pinterest.service';

@Component({
  selector: 'app-pinterest',
  templateUrl: './pinterest.component.html',
  styleUrls: ['./pinterest.component.css']
})
export class PinterestComponent {
  photoarray:any=[];
  constructor(private _pinterestService:PinterestService) {
  _pinterestService.getpinterestfunction().subscribe(
    (data:any)=>{
      console.log(data);
      this.photoarray = data;
    },(err:any)=>{
      alert('Internal Server Error');
    }
  )
    }
  }
  

