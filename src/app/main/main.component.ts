import {Component, OnInit, Input} from '@angular/core';
import {LoanInfoComponent} from '../loan-info/loan-info.component'
import {ContactComponent} from '../contact/contact.component'
import {CommentsComponent} from "../comments/comments.component";
import {ILoan} from "../service/Loan";
import {LoanService} from "../service/loan.service";
import {PaymentsComponent} from "../payments/payments.component";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-main',
  providers: [LoanService,LoanInfoComponent, PaymentsComponent, CommentsComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']

})

export class MainComponent implements OnInit {

  constructor(private ar: ActivatedRoute, private ls: LoanService) {
    this.long = false;
    this.tf = false;
    this.short4 = "4";
    this.LoanID = null;
  }

  private subscription: Subscription;
  Loan: ILoan;
  private LoanID: string;
  userName: string;
  winUserName: string;
  emittedReComments(): boolean{
    return this.tf;
  }
  tf: boolean;
  long: boolean;
  short4: string;

  setTheUser(){
    if(this.winUserName == undefined || this.winUserName == null)
      return;
    localStorage.setItem('winUserName', this.winUserName);
    this.ls.getUser(this.winUserName).subscribe(x => {
      if(x.length > 0) {
        this.userName = x[0].userName;
        localStorage.setItem('userName', this.userName);
      }
    });
  }
  isUserEmpty(): boolean{
    if(this.userName == null)
      return true;
    else
      return false;
  }
  getUserName(): string{
    return this.userName;
  }
  isLong(): boolean{
    return this.long;
  }
  getTF():boolean{
    return this.tf;
  }

  getLoanID(): string{
    return this.LoanID;
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
    let tryuser = localStorage.getItem('winUserName');
    if(tryuser != null)
      this.winUserName = tryuser;
    let user = localStorage.getItem('userName');
    if(user != null)
      this.userName = user;
    if(this.Loan == undefined)
      console.log("undefined loan on main ngOnInit");
    let t = "test";
    this.subscription = this.ar.queryParams.subscribe(
      (queryParam: any) => {
        let xl = queryParam['LoanID'];
        if(xl != null) {
          this.LoanID = xl;
        }
        let un = queryParam['userName'];
        if(un != null)
          this.userName = un;
      }

    );
  }

}
