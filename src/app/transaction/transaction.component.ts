import { Component, OnInit } from '@angular/core';
import { TransactionService } from './service/transaction.service';
import { TransactionId } from './transaction.mock';
import { TransactionModel } from './transaction.model';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  transactions : TransactionModel[] = [];

  constructor(public transactionService : TransactionService ) {

   }

  ngOnInit(): void {
    this.transactionService.fetchTransactions().subscribe(response=>{this.transactions=response;});
    //this.transactionService.fetchTransactionsById(TransactionId).subscribe(response=>this.transactions=response);
  }

}