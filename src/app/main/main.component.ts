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
    this.Loan = {loanID: "00000", unappliedOption: null, originalAmt: null, principalBal: null, escrowPmt: null,
      legalFeeBal: null, othFundBal: null, lossDraftBal: null, partialPaid: null, othFeeBal: null,prpetitionUnappliedBal: null,
      stipulationUnappliedBal: null, unappliedBal: null, lcBal: null, piPmp: null, othFundPmt: null, escrowBal: null,
      currencyType: "US Dollars", pmtFrequency: null, deferredPrincipal: null, deferredInterest: null, dateLastContacted: null,
      promisedByDate: null, outcome: "", lastPmtRecvdDate: null, lastUpdateDate: null, lastLetterDt: null, lastNSFDt: null,
      lastNSFCheck: null, outcomeDescription: "", borrowerName: "bn", borrowerSSN: "ssn", coBorrowerName: "cb", coBorrowerSSN: "cbssn",
      investor: "",interestRate: null, paymentAmount: null, inglePointOfContactName: "spoc", numberOfPaymentsdue: 0,
      lastInspRecvDt: null, dueDate: null, loanType: "" };
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
