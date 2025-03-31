import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  id:number=0;
  constructor(private _accountsService:AccountsService, private _router:Router, private _activatedRouter:ActivatedRoute){
        _activatedRouter.params.subscribe(
          (data:any)=>{
            console.log(data.id);
            this.id=data.id;
          },(err:any)=>{
            alert("Internal Server Error")
          }
        )

        if(this.id){
          _accountsService.getAccount(this.id).subscribe(
            (data:any)=>{
              console.log(data);
              this.accountForm.patchValue(data);
            },(err:any)=>{
              alert("Internal Server Error")
            }
          )
        }
  }
    create(){
      if(this.id){
      console.log(this.accountForm.value);
      this._accountsService.editAccount(this.id,this.accountForm.value).subscribe(
        (data:any)=>{
          alert("New Account Entry Created Successfully");
          this._router.navigateByUrl("/dashboard/accounts");
        }, (err:any)=>{
          alert("Internal Server Error");
        }
        )
        }else{
          console.log(this.accountForm.value);
      this._accountsService.createAccounts(this.accountForm.value).subscribe(
        (data:any)=>{
          alert("New Vehicle Created Successfully");
          this._router.navigateByUrl("/dashboard/accounts");
        }, (err:any)=>{
          alert("Internal Server Error");
        }
      )
    }
  }
}


