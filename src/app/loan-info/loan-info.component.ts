import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {LoanService} from "../service/loan.service";
import { ILoan} from "../service/Loan";
import {IMailingAddress} from "../main/MailingAddress";
import {IContact, Contact} from "../contact/contact";
import {IAuthorizedUser} from "../service/AuthorizedUser";
import {FormsModule} from '@angular/forms';
import {isDate} from "rxjs/util/isDate";

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
    this.d1 ="";
    this.d2 = "";
    this.d3 = "";

/*
    this.c = {loanID: "",dateLastContacted: null, outcome: "", demeanor: "", reason: "", followUpDt: null, promiseAmt: 0, promiseAmt2: 0, promiseAmt3: 0,
              promisedByDate: null, promiseDate2: null, promiseDate3: null};
*/

    this.c = new Contact();
  }


  @Output() OnGetLoan = new EventEmitter<ILoan>();

  public Loan: ILoan;
  public MA: IMailingAddress;
  public gref: string;
  contacts: Array<IContact>;
  public c: Contact;
  public showAU: boolean;
  public pbd: string;
  public pbd2: string;
  public pbd3: string;
  public d1: string;
  public d2: string;
  public d3: string;
  public test: string;
  public testdate: Date;

  testDate(ds: string){
    this.test = ds;
    let d = Date.parse(ds);
    if (isDate(d)){
      this.d1 ="";
      this.c.promisedByDate = d;
    }
    else this.d1 = "pde";

  }
  mdy(s: string): Date{
    let ee = this.pbd.split('/');
    return new Date(Date.UTC(Number(ee[2]), Number(ee[0])-1, Number(ee[1]))) ;
  }

  savePromises() {
    //first checkvalidations
    let invalid = false;
    this.d1 = "";
    this.d2 = "";
    this.d3 = "";

    let d = this.mdy(this.pbd);
    this.test = d.toISOString();
    if (this.pbd != null){
      let ee = this.pbd.split('/');
      let d = new Date(Date.UTC(Number(ee[0]), Number(ee[1])-1, Number(ee[2])+1)) ;

      if (isDate(d)) {
        this.d1 = "";
        this.c.promisedByDate = d;
      }
      else {
        this.d1 = "pde";
        invalid = true;
      }
    }
    if (this.pbd2 != null) {
      let d = this.mdy(this.pbd2);

      if (isDate(d)) {
        this.d2 = "";
        this.c.promisedByDate = d;
      }
      else {
        this.d2 = "pde";
        invalid = true;
      }
    }

    if (this.pbd3 != null) {
      let d = this.mdy(this.pbd3);

      if (isDate(d)) {
        this.d3 = "";
        this.c.promisedByDate = d;
      }
      else {
        this.d3 = "pde";
        invalid = true;
      }
    }
    if(!invalid)
      this.ls.savePromised(this.c);
  }
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
//new DatePipe().transform(inputDate);
      this.ls.getContacts(id).subscribe(c => {
        if(c != null) {
          this.contacts = c;
          if(c.length > 0) {
            this.c = c[0];


            //this.test = myd.toDateString();
          //  let r = new DatePipe().transform(myd, 'MM/dd/yyyy');
            //this.test = new DatePipe().transform(myd, 'MM/dd/yyyy');
            //[ngModel]="pdb | date : 'modifier'" (ngModelChange)="parse($event)"

            this.testdate = this.c.promisedByDate;
           // this.pbd2 = this.c.promiseDate2.toDateString();
            //this.pbd3 = this.c.promiseDate3.toDateString();
          }
        }
      })



  }

  set hpromisedByDate(e){ /* What gets Saved */
    let ee = e.split('-');
    let d = new Date(Date.UTC(Number(ee[0]), Number(ee[1])-1, Number(ee[2])+1)) ;
    this.c.promisedByDate = new Date(d.toISOString().substring(0,19));
  }
  get hpromisedByDate(){ /* What gets displayed */
    if(this.c.promisedByDate != null) {
      let d = new Date(this.c.promisedByDate.valueOf());
      let s = d.toLocaleDateString();
      let ee = s.split('/');
      if(ee[0].length == 1)
        ee[0] = "0" + ee[0];
      if(ee[1].length == 1)
        ee[1] = "0" + ee[1];
      let final = ee[2] + "-" + ee[0] + "-" + ee[1];
      return final;
    }
  }
  set hpbd2(e){ /* What gets Saved */
    let ee = e.split('-');
    let d = new Date(Date.UTC(Number(ee[0]), Number(ee[1])-1, Number(ee[2])+1)) ;
    this.c.promiseDate2 = new Date(d.toISOString().substring(0,19));
  }
  get hpbd2(){ /* What gets displayed */
    if(this.c.promiseDate2 != null) {
      let d = new Date(this.c.promiseDate2.valueOf());
      let s = d.toLocaleDateString();
      let ee = s.split('/');
      if(ee[0].length == 1)
        ee[0] = "0" + ee[0];
      if(ee[1].length == 1)
        ee[1] = "0" + ee[1];
      let final = ee[2] + "-" + ee[0] + "-" + ee[1];
      return final;
    }
  }
  set hpbd3(e){ /* What gets Saved */
    let ee = e.split('-');
    let d = new Date(Date.UTC(Number(ee[0]), Number(ee[1])-1, Number(ee[2])+1)) ;
    this.c.promiseDate3 = new Date(d.toISOString().substring(0,19));
  }
  get hpbd3(){ /* What gets displayed */
    if(this.c.promiseDate3 != null) {
      let d = new Date(this.c.promiseDate3.valueOf());
      let s = d.toLocaleDateString();
      let ee = s.split('/');
      if(ee[0].length == 1)
        ee[0] = "0" + ee[0];
      if(ee[1].length == 1)
        ee[1] = "0" + ee[1];
      let final = ee[2] + "-" + ee[0] + "-" + ee[1];
      return final;
    }
  }
  ngOnInit() {
    this.Loan.loanID = '0000027900';
    this.OnGetLoan.emit(this.Loan);
    this.onChangedLoanID();
  }


}
