import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private _httpClient:HttpClient ) { }

    getAccounts():Observable<any>{
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals");
    }

    createAccounts(data:any):Observable<any>{
      return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals", data);
    }

    sortAccounts(column:string, order:string):Observable<any>{
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+column+"&order="+order);
    }

    paginate(limit:string, page:string):Observable<any>{
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit="+limit+"&page="+page);
    }
}
