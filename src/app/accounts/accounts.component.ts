import { Component} from '@angular/core';
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
  column:string='';
  order:string='';
  sort(){
    this._accountService.sortAccounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.accounts=data;
      },(err:any)=>{
        alert("Internal Server Error");
      }
    )
  }
  limit:string='';
  page:string='';
  pagination(){
    this._accountService.paginate(this.limit,this.page).subscribe(
      (data:any)=>{
        this.accounts=data;
      },(err:any)=>{
        alert("Internal Server Error");
      } 
    )
  }

}
