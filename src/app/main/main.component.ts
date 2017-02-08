import { Component, OnInit } from '@angular/core';
import {LoanInfoComponent} from '../loan-info/loan-info.component'
import {ContactComponent} from '../contact/contact.component'
import {CommentsComponent} from "../comments/comments.component";
import {ILoan} from "../service/Loan";
import {LoanService} from "../service/loan.service";

@Component({
  selector: 'app-main',
  providers: [LoanService,LoanInfoComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  constructor() {
    this.Loan = {borrName: "", loanID: "00000", acquiredFrom: "",
      dueDate: new Date(), interestRate: 0, investorName:"",    loanPurpose: "", mersNum: 0, originalAmt: 0,
      pmtRemaining: 0, principleBal: 0, secondMtg: 0, soldTo: "", loanType: ""}
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
