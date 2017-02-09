import {Component, OnInit, Input} from '@angular/core';
import {IContact} from "./contact";
import {LoanService} from "../service/loan.service";
import {ILoan} from "../service/Loan";

@Component({
  selector: 'app-contact',
  providers: [LoanService],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private ls: LoanService) { }

  @Input('loan')
  set loan(l: ILoan){
    this.Loan = l;
    this.getContacts();
  }
  get loan(): ILoan{
    return this.Loan;
  }

  Loan: ILoan;
  contacts: Array<IContact>;
//even tho we are getting an array back we will show the first.
  //the contact name shown in a dropdown so that when it is selected we show the selected contact.


  public getContacts() {
    this.ls.getContacts(this.Loan.loanID).subscribe(c => {
      this.contacts = c;
    });
  }
  ngOnInit() {
  }

}
