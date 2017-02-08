import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {LoanService} from "../service/loan.service";
import { ILoan} from "../service/Loan";
@Component({
  selector: 'app-loan-info',
  providers: [LoanService],
  templateUrl: './loan-info.component.html',
  styleUrls: ['./loan-info.component.css']
})
export class LoanInfoComponent implements OnInit {

  constructor(private ls: LoanService) {   this.Loan = {borrName: "", loanID: "00000", acquiredFrom: "",
    dueDate: new Date(), interestRate: 0, investorName:"",    loanPurpose: "", mersNum: 0, originalAmt: 0,
    pmtRemaining: 0, principleBal: 0, secondMtg: 0, soldTo: "", loanType: ""}
  }

  Loan: ILoan;
  @Output() OnGetLoan = new EventEmitter<ILoan>();

  onChangedLoanID(){
    let id = this.Loan.loanID;
    if(id.length === 10)
      this.ls.getLoan(id).subscribe(h => {
        if(h.length > 0) {
          this.Loan = h[0];
          this.OnGetLoan.emit(this.Loan);
        }
      });

  }
  ngOnInit() {
  }

}
