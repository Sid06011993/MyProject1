import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-interest',
  templateUrl: './simple-interest.component.html',
  styleUrls: ['./simple-interest.component.css']
})
export class SimpleInterestComponent {

principal:number=0;
period:number=0;
interest:number=0;
result:number=0;

si(){
  this.result=((this.principal*this.interest*this.period)/100)
}

}
