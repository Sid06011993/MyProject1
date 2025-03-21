import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  accounts:any=[];
  constructor(private _accountService:AccountsService){
    _accountService.getAccounts().subscribe(
      (data:any)=>{
        console.log(data);
        this.accounts=data;
        console.log(this.accounts);
      },(err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

}
