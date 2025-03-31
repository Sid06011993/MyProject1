import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css']
})
export class AccountdetailsComponent {
  id:number=0;
  account:any='';
  constructor(private _activatedRoute:ActivatedRoute, 
  private _accountService:AccountsService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
        console.log(this.id);
    },(err:any)=>{
      alert("Internal Server Error");
    }
  )
  _accountService.getAccount(this.id).subscribe(
    (data:any)=>{
      console.log(data);
      this.account=data;
    }, (err:any)=>{
      alert("Internal Server Error");
    }
  )
  }
  }

