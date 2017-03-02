import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {IContact, Contact} from "./contact";
import {LoanService} from "../service/loan.service";
import {ILoan} from "../service/Loan";
import {Outcome, IOutcome} from "./outcome";
import {Reason, IReason} from "./reason";
import {IDemeanor} from "./demeanor";
import {Form} from "@angular/forms";


@Component({
  selector: 'app-contact',
  providers: [LoanService],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private ls: LoanService) {
    this.error = "";
    this.contacts = new Array<IContact>();
    this.c = new Contact();
    this.reasons = new Array<Reason>();
    this.outcomes = new Array<Outcome>();
    this.demeanors = new Array<IDemeanor>();
    this.demeanors.push({description: 'cooperative', code: '01'}, {description:'uncoopreative', code: '02'});
    this.c.setupBy = "test Gadget";
    this.saveButton = "Update Contact";
  }

  @Output() OnComment = new EventEmitter<boolean>();

  @Input('loan')
  set loan(l: ILoan){
    this.Loan = l;

    this.ls.getContacts(this.Loan.loanID).subscribe(clocal => {
      if (clocal != null) {
        this.contacts = clocal;
        this.saveButton = "Update Contact";
        if (clocal.length > 0) {
          this.c =clocal[0];
          this.prev = Object.assign({},this.c);
          /*for(let r of this.reasons){
            if(r.description = this.c.reason)
              this.res = r;
          }*/
        }
      }
    });
  }
  get loan(): ILoan{
    return this.Loan;
  }

  @Input() userName: string;

  /*
  getComments():Array<Comment>{
    return this.comments;
  }*/

  saveButton: string;
  prev: IContact;
  comments: Array<Comment>;
  demeanors: Array<IDemeanor>;
  reasons: Array<Reason>;
  outcomes: Array<Outcome>;
  Loan: ILoan;
  contacts: Array<IContact>;
  c: IContact;
  res: IReason;
  outc: IOutcome;
  dem: IDemeanor;
  message: string;
//even tho we are getting an array back we will show the first.
  //the contact name shown in a dropdown so that when it is selected we show the selected contact.

  set fold(e){
    let ee = e.split('-');
    if(ee.length > 0 && Number(ee[0]) > 2000) {
      let d = new Date(Date.UTC(Number(ee[0]), Number(ee[1]) - 1, Number(ee[2]) + 1));
      this.c.followUpDt = new Date(d.toISOString().substring(0, 19));
    }
  }
  get fold(){
    if(this.c.followUpDt != null) {
      let d = new Date(this.c.followUpDt.valueOf());
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
    if(ee.length > 0 && Number(ee[0]) > 2000) {
      let d = new Date(Date.UTC(Number(ee[0]), Number(ee[1]) - 1, Number(ee[2]) + 1));
      this.c.promiseDate2 = new Date(d.toISOString().substring(0, 19));
    }
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
    if(ee.length > 0 && Number(ee[0]) > 2000) {
      let d = new Date(Date.UTC(Number(ee[0]), Number(ee[1]) - 1, Number(ee[2]) + 1));
      this.c.promiseDate3 = new Date(d.toISOString().substring(0, 19));
    }
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
  error: string;
  savePromise(o){

    if(o.value.dem != undefined && o.value.dem.length != "") {
      this.c.demeanor = o.value.dem.description;
      this.c.demeanorcode = o.value.dem.code;
    }

    if(o.value.outc != undefined && o.value.outc.length != "") {
      this.c.outcome = o.value.outc.description;
      this.c.outcomecode = o.value.outc.code;

    }
    if(o.value.res != undefined && o.value.res.length != "") {
      this.c.reason = o.value.res.description;
      this.c.reasoncode = o.value.res.code;
    }
    if(this.userName != null)
      this.c.setupBy = this.userName;
    try {
      let jprev = JSON.stringify(this.prev);
      let jso = JSON.stringify(this.c);
      if(jprev != jso) {
        this.message = "";
        this.ls.put("Contacts", jso, "Comments").subscribe(
          result => {
            console.log(result);
            this.OnComment.emit(true);
          },
          er => {
            this.error = <any>er + " 173";
          }
        );
      }
      else this.message = "no changes";
    }
    catch(e)
    {
      this.error = e.toString() + 'catch : contact error';
    }
  }
 /* public getContacts() {
    this.ls.getContacts(this.Loan.loanID).subscribe(c => {
      this.contacts = c;
      this.res.description = this.c.reason;
      this.outc.description = this.c.outcome;
      this.dem.description = this.c.demeanor;
    });
  }*/
  ngOnInit() {
    this.ls.getOutcomes().subscribe(o => {
      this.outcomes = o;
    })
    this.ls.getReasons().subscribe(r => {
      this.reasons = r;
    })

  }

}
