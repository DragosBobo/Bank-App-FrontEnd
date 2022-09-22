import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { AccountModel, CreateAccountModel } from './account.model';
import { AccountService } from './service/account.service';
import { TransactionService } from '../transaction/service/transaction.service';
import { TransactionModel } from '../transaction/transaction.model';
import { UserService } from '../user/service/user.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  accounts: AccountModel[] = [];
  accountTransactions: TransactionModel[] = [];
  name: string = this.userService.currentUser.username;
  id = localStorage.getItem("id");
  accountSlice: AccountModel[] = [];
  constructor(private userService: UserService, private router: Router, private accountService: AccountService, private transactionService: TransactionService) { }

  ngOnInit(): void {
    if (this.id != null) {
      this.accountService.getAccounts(this.id).subscribe(accounts => {
        this.accounts = accounts;
        this.accountSlice=this.accounts.slice(0,4);
      });
    }
  }
  onPageChange(event : PageEvent){
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.accounts.length)
    {endIndex = this.accounts.length;}
    this.accountSlice = this.accounts.slice(startIndex,endIndex);
  }
  
}


