import {Component, OnInit, Input} from '@angular/core';
import {LoanInfoComponent} from '../loan-info/loan-info.component'
import {ContactComponent} from '../contact/contact.component'
import {CommentsComponent} from "../comments/comments.component";
import {ILoan} from "../service/Loan";
import {LoanService} from "../service/loan.service";
import {PaymentsComponent} from "../payments/payments.component";

@Component({
  selector: 'app-main',
  providers: [LoanService,LoanInfoComponent, PaymentsComponent, CommentsComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']

})

export class MainComponent implements OnInit {

  constructor() {
    this.long = false;
    this.tf = false;
    this.short4 = "4";
  }

  Loan: ILoan;
  emittedReComments(): boolean{
    return this.tf;
  }
  tf: boolean;
  long: boolean;
  short4: string;
  isLong(): boolean{
    return this.long;
  }
  setLong(b: boolean)
  {
    this.long = b;
    if(b)
      this.short4 = "12";
    else
      this.short4 = "4";
  }
  onComment(ca: boolean){
    this.tf = ca;
    //this.emittedReComments(ca);

  }
  onGetLoan(l: ILoan)
  {
    this.Loan  = l;

  }
  getLoan(): ILoan{
    if(this.Loan == undefined)
      console.log("undefined loan on main getLoan");
    return this.Loan;
  }
  ngOnInit() {
    if(this.Loan == undefined)
      console.log("undefined loan on main ngOnInit");
    let t = "test";
  }

}
