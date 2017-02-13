import {Component, OnInit, Input} from '@angular/core';
import {ILoan} from "../service/Loan";
import {payment} from "./payment";
import {LoanService} from "../service/loan.service";

@Component({
  selector: 'app-payments',
  providers:[LoanService],
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  constructor(private ls: LoanService) {
    this.payments = new Array<payment>();
  }

  @Input('loan')
  set loan(l: ILoan){
    this.Loan = l;
    this.ls.getPayments(this.Loan.loanID).subscribe(c => {
      this.payments  = c;
    })
  }
  get loan(): ILoan{
    return this.Loan;
  }

  public payments: Array<payment>;
  Loan: ILoan;
  ngOnInit() {
  }

}
