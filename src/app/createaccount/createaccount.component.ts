import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {

  public accountForm:FormGroup = new FormGroup({
    account_name: new FormControl(),
    available_balance:new FormControl(),
    account_number:new FormControl(),
    city:new FormControl(),
    profie_picture: new FormControl()
  })
  constructor(private _accountService:AccountsService, private _router:Router){}
    create(){
      console.log(this.accountForm.value);
      this._accountService.createAccounts(this.accountForm.value).subscribe(
        (data:any)=>{
          alert("New Account Entry Created Successfully");
          this._router.navigateByUrl("/dashboard/accounts");
        }, (err:any)=>{
          alert("Internal Server Error");
        }
        )
  }
}


