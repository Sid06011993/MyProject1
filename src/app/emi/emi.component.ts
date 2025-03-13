import { Component } from '@angular/core';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent {

principal: number=0;
interest: number=0;
period: number=0;
result: number=0;
emi(){
  this.interest=this.interest/100/12;
this.result=(this.principal * this.interest * ((1+this.interest)**this.period))/(((1+this.interest)**this.period) - 1)
}
}
