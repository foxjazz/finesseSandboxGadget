import {Component, OnInit, Input} from '@angular/core';
import {IContact, Contact} from "./contact";
import {LoanService} from "../service/loan.service";
import {ILoan} from "../service/Loan";
import {Outcome} from "./outcome";
import {Reason, IReason} from "./reason";
import {IDemeanor} from "./demeanor";


@Component({
  selector: 'app-contact',
  providers: [LoanService],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private ls: LoanService) {
    this.contacts = new Array<IContact>();
    this.c = new Contact();
    this.reasons = new Array<Reason>();
    this.outcomes = new Array<Outcome>();
    this.demeanors = new Array<IDemeanor>();
    this.demeanors.push({description: 'cooperative', code: '01'}, {description:'uncoopreative', code: '02'});
  }

  @Input('loan')
  set loan(l: ILoan){
    this.Loan = l;

    this.ls.getContacts(this.Loan.loanID).subscribe(c => {
      if (c != null) {
        this.contacts = c;
        if (c.length > 0) {
          this.c = c[0];
        }
      }
    });
  }
  get loan(): ILoan{
    return this.Loan;
  }

  demeanors: Array<IDemeanor>;
  reasons: Array<Reason>;
  outcomes: Array<Outcome>;
  Loan: ILoan;
  contacts: Array<IContact>;
  c: IContact;
  res: {description: string; code: string};
  outc: {description: string; code: string};
  dem: {description: string; code: string};
//even tho we are getting an array back we will show the first.
  //the contact name shown in a dropdown so that when it is selected we show the selected contact.
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

  savePromise(){

    this.c.demeanor = this.dem.description;
    this.c.outcome = this.outc.description;
    this.c.reason = this.res.description;
    this.c.demeanorcode = this.dem.code;
    this.c.outcomecode = this.outc.code;
    this.c.reasoncode = this.res.code;
    this.ls.savePromised(this.c);
  }
  public getContacts() {
    this.ls.getContacts(this.Loan.loanID).subscribe(c => {
      this.contacts = c;
      this.res.description = this.c.reason;
      this.outc.description = this.c.outcome;
      this.dem.description = this.c.demeanor;
    });
  }
  ngOnInit() {
    this.ls.getOutcomes().subscribe(o => {
      this.outcomes = o;
    })
    this.ls.getReasons().subscribe(r => {
      this.reasons = r;
    })

  }

}
