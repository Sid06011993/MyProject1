import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
[x: string]: any;
  accounts: any[] = [];
  column: string = 'name'; 
  order: string = 'asc';
  limit: string = '10';
  page: string = '1';

  constructor(private _accountService: AccountsService) {}

  ngOnInit() {
    this.loadAccounts();
  }

  loadAccounts() {
    this._accountService.getAccounts().subscribe(
      (data: any) => {
        console.log(data);
        this.accounts = data;
      },
      (err: any) => {
        alert("Internal Server Error");
      }
    );
  }

  sort() {
    this._accountService.sortAccounts(this.column, this.order).subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (err: any) => {
        alert("Internal Server Error");
      }
    );
  }

  pagination() {
    this._accountService.paginate(this.limit, this.page).subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (err: any) => {
        alert("Internal Server Error");
      }
    );
  }

  delete(id: any) {
    if (confirm("Are you sure you want to delete the record?")) {
      this._accountService.deleteAccounts(id).subscribe(
        () => {
          alert("Record Deleted Successfully!");
          this.loadAccounts(); 
        },
        (err: any) => {
          alert("Internal Server Error");
        }
      );
    } else {
      alert("Delete was cancelled");
    }
  }
}
