import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AccountModel } from "../account.model";

@Injectable({providedIn:'root'})
export class AccountService{
    
    private readonly accountApiUrl = `${environment.apiBase}/Account`;
    constructor(private http : HttpClient){

    }
    //get accounts 
    fetchAccounts() : Observable<AccountModel[]> {

        return this.http.get<AccountModel[]>(this.accountApiUrl);
    }
    //create accounts
    createAccounts(){

    }
    //delete account
    deleteAccount(){

    }
}