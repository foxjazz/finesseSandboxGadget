import { Component, OnInit } from '@angular/core';
import {LoanInfoComponent} from '../loan-info/loan-info.component'
import {ContactComponent} from '../contact/contact.component'
import {CommentsComponent} from "../comments/comments.component";
import {ILoan} from "../service/Loan";
import {LoanService} from "../service/loan.service";
import {PaymentsComponent} from "../payments/payments.component";

@Component({
  selector: 'app-main',
  providers: [LoanService,LoanInfoComponent, PaymentsComponent, CommentsComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  constructor() {

  }

  Loan: ILoan;

  onGetLoan(l: ILoan)
  {
    this.Loan  = l;

  }
  getLoan(): ILoan{
    return this.Loan;
  }
  ngOnInit() {
    if(this.Loan == undefined)
      console.log("undefined");
    let t = "test";
  }

}
