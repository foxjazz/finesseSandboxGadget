import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
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
    this.long = false;
  }

  @Input() long: boolean;

  @Input('loan')
  set loan(l: ILoan){
    this.Loan = l;
    this.ls.getPayments(this.Loan.loanID).subscribe(c => {
      this.payments  = c;
    })
  }
  @Output() OnSetLong =  new EventEmitter<boolean>();
  get loan(): ILoan{
    return this.Loan;
  }
  setLong(b: boolean){
    this.OnSetLong.emit(b);
  }
  public payments: Array<payment>;
  Loan: ILoan;
  ngOnInit() {
  }

}
