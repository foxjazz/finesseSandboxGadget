import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {LoanService} from "../service/loan.service";
import { ILoan} from "../service/Loan";
import {IMailingAddress} from "../main/MailingAddress";
import {IContact, Contact} from "../contact/contact";
import {IOtherLoan} from "./IOtherLoan";
import {PaymentsComponent} from "../payments/payments.component";
import {IHistory} from "./history";

@Component({
  selector: 'app-loan-info',
  providers: [LoanService, PaymentsComponent],
  templateUrl: './loan-info.component.html',
  styleUrls: ['./loan-info.component.css']
})
export class LoanInfoComponent implements OnInit {

  constructor(private ls: LoanService) {
    this.recent = new Array<IHistory>();
    this.otherLoans = new Array<IOtherLoan>();
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
    dueDate: null, primStat: "", loanType: null, collector: "", legal:"", warning: ""};

    this.showAU = false;

    this.MA = {borrName: null, state: null, city: null, addressLine2: null, addressLine1: null, zip:null};
    this.gref = "";
    this.d1 ="";
    this.d2 = "";
    this.d3 = "";
    this.lid = '27900';
/*
    this.c = {loanID: "",dateLastContacted: null, outcome: "", demeanor: "", reason: "", followUpDt: null, promiseAmt: 0, promiseAmt2: 0, promiseAmt3: 0,
              promisedByDate: null, promiseDate2: null, promiseDate3: null};
*/

    this.c = new Contact();
  }

  @Output() OnUpdateCommentFromCommentInput = new EventEmitter<string>();
  @Output() OnGetLoan = new EventEmitter<ILoan>();
  @Input('LoanID')
  set LoanID(s: string){
    if(s != null) {
      this.lid = s.substring(5);
      this.tlid = s;
      this.onChangedLoanID();
    }
  }
  get LoanID(): string{
    return this.Loan.loanID;
  }

  @Input() userName: string;
  updateComment(commentJ: string){
    this.OnUpdateCommentFromCommentInput.emit(commentJ);
  }
  public Loan: ILoan;
  public MA: IMailingAddress;
  public gref: string;
  contacts: Array<IContact>;
  public c: Contact;
  public showAU: boolean;
  public pbd: string;
  public pbd2: string;
  public lid: string;
  public pbd3: string;
  public d1: string;
  public d2: string;
  public d3: string;
  public test: string;
  public testdate: Date;
  private tlid: string;
  private rh: IHistory;
  private recent: Array<IHistory>;
  public otherLoans: Array<IOtherLoan>;
/*
  testDate(ds: string){
    this.test = ds;
    let d = Date.parse(ds);
    if (isDate(d)){
      this.d1 ="";
      this.c.promisedByDate = d;
    }
    else this.d1 = "pde";

  }
*/

  getUserName():string{
    return this.userName;
  }
  public test2: string;
  onOtherLoanSelect(l: any){
    this.lid = l.loanID.substring(5);
    this.tlid = l.loanID;
    this.onChangedLoanID();

  }
  onRecentLoanSelect(recl: any)
  {
    if(recl != null) {
      this.lid = recl.loanId(5);
      this.tlid = recl.loanId;
      this.onChangedLoanID();
    }
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

    if(this.lid.length === 5)
      this.tlid = "00000" + this.lid;
    else
      return;

    if(this.tlid.length === 10 ) {
      this.ls.getMailingAddress(this.tlid).subscribe(h => {
        if (h.length > 0) {
          this.MA = h[0];
          this.gref = "https://www.google.com/maps/place/" + this.MA.addressLine1.replace(' ', '').replace('  ', '') + "," + this.MA.city.replace(' ', '') + "," + this.MA.state;
        }

      });

      this.ls.getLoan(this.tlid).subscribe(h => {
        if(h === undefined)
          return;
        if (h.length > 0) {
          this.Loan = h[0];
          this.OnGetLoan.emit(this.Loan);
          if (this.recent == null)
            return;
          this.recent = this.recent.sort((l,r) => {if (l.dt < r.dt) return 1; if(l.dt > r.dt) return -1; else return 0;});
          if(this.recent.length == 0 || this.Loan.loanID != this.recent[0].loanId) {
            this.rh = {loanId: this.Loan.loanID, borrName: this.Loan.borrowerName, dt: new Date()}};
            this.recent.push(this.rh);
            this.recent = this.recent.sort((l, r) => {
              if (l.dt < r.dt) return 1;
              if (l.dt > r.dt) return -1; else return 0;
            });
            if (this.recent.length > 6)
              this.recent.length = 7;
            let str = JSON.stringify(this.recent);
            console.log(str);
            localStorage.setItem('recent', str);
          }
      });

      this.ls.getOtherLoans(this.tlid).subscribe(o => {
        if (o.length > 0) {
          this.otherLoans = o;
        }
      });
//new DatePipe().transform(inputDate);
     /* this.ls.getContacts(id).subscribe(c => {
        if (c != null) {
          this.contacts = c;
          if (c.length > 0) {
            this.c = c[0];


            //this.test = myd.toDateString();
            //  let r = new DatePipe().transform(myd, 'MM/dd/yyyy');
            //this.test = new DatePipe().transform(myd, 'MM/dd/yyyy');
            //[ngModel]="pdb | date : 'modifier'" (ngModelChange)="parse($event)"

            //this.testdate = this.c.promisedByDate;
            // this.pbd2 = this.c.promiseDate2.toDateString();
            //this.pbd3 = this.c.promiseDate3.toDateString();
          }
        }
      });*/
    }


  }

  set hpbd(e){ /* What gets Saved */
    let ee = e.split('-');
    if(ee.length > 0 && Number(ee[0]) > 2000) {
      let d = new Date(Date.UTC(Number(ee[0]), Number(ee[1]) - 1, Number(ee[2]) + 1));
      this.c.promisedByDate = new Date(d.toISOString().substring(0, 19));
    }
  }
  get hpbd(){ /* What gets displayed */
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
    /*let rc2 = new Array<IHistory>();
    localStorage.setItem('recent',JSON.stringify(rc2));*/
    let rec: Array<IHistory>;

    let jrec = localStorage.getItem('recent');
    rec = JSON.parse(jrec);
   /* for(let o of rec){
      o.dt = new Date(o.dt);
    }*/
    if(rec == null)
      this.recent = new Array<IHistory>();
    else
      this.recent = rec;





    this.onChangedLoanID();
    this.OnGetLoan.emit(this.Loan);

  }


}
