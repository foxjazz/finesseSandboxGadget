import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {LoanService} from "../service/loan.service";
import { ILoan} from "../service/Loan";
import {IMailingAddress} from "../main/MailingAddress";
import {IContact} from "../contact/contact";
import {IAuthorizedUser} from "../service/AuthorizedUser";
@Component({
  selector: 'app-loan-info',
  providers: [LoanService],
  templateUrl: './loan-info.component.html',
  styleUrls: ['./loan-info.component.css']
})
export class LoanInfoComponent implements OnInit {

  constructor(private ls: LoanService) {
    this.Loan =  {loanID: "0000032141",
    originalAmt: null, principalBal: null, escrowPmt: null,
    legalFeeBal: null,
      lcBal: null, piPmp: null, currencyType: "US Dollars", pmtFrequency: null,
    dateLastContacted: null,
    promisedByDate: null, outcome: "", lastPmtRecvdDate: null, lastUpdateDate: null,
    lastLetterDt: null, lastNSFDt: null, lastNSFCheck: null, outcomeDescription: "",
      borrowerName: "bn", borrowerSSN: "ssn",
    coBorrowerName: "cb", coBorrowerSSN: "cbssn",
    investor: "", interestRate: null, paymentAmount: null,
    spoc: "spoc", numberOfPaymentsDue: 0,
    dueDate: null, primStat: "", loanType: null, collector: ""};

    this.showAU = false;

    this.MA = {borrName: null, state: null, city: null, addressLine2: null, addressLine1: null, zip:null};
    this.gref = "";

    this.c = {loanID: "",dateLastContacted: null, outcome: "", demeanor: "", reason: "", followUpDt: null};


  }


  @Output() OnGetLoan = new EventEmitter<ILoan>();

  public Loan: ILoan;
  public MA: IMailingAddress;
  public gref: string;
  contacts: Array<IContact>;
  public c: IContact;
  public showAU: boolean;
  getLoan():ILoan{
    return this.Loan;
  }
  hoverAU(){
    this.showAU = true;
  }
  leaveAU(){
    this.showAU = false;
  }
  onChangedLoanID(){
    let id = this.Loan.loanID;
    if(id.length === 10)
      this.ls.getMailingAddress(id).subscribe(h => {
        if(h.length > 0){
          this.MA = h[0];
          this.gref = "https://www.google.com/maps/place/" + this.MA.addressLine1.replace(' ','').replace('  ','') + "," + this.MA.city.replace(' ','') + "," + this.MA.state;
        }

      });
      this.ls.getLoan(id).subscribe(h => {
        if(h.length > 0) {
          this.Loan = h[0];
          this.OnGetLoan.emit(this.Loan);
        }
      });

      this.ls.getContacts(id).subscribe(c => {
        if(c != null) {
          this.contacts = c;
          if(c.length > 0)
            this.c = c[0];
        }
      })



  }
  ngOnInit() {
    this.Loan.loanID = '0000027900';
    this.OnGetLoan.emit(this.Loan);
    this.onChangedLoanID();
  }


}
