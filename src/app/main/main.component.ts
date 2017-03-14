import {Component, OnInit, Input, Output} from '@angular/core';
import {LoanInfoComponent} from '../loan-info/loan-info.component'
import {ContactComponent} from '../contact/contact.component'
import {CommentsComponent} from "../comments/comments.component";
import {ILoan} from "../service/Loan";
import {LoanService} from "../service/loan.service";
import {PaymentsComponent} from "../payments/payments.component";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {EventEmitter} from "@angular/forms/src/facade/async";

@Component({
  selector: 'app-main',
  providers: [LoanService,LoanInfoComponent, PaymentsComponent, CommentsComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']

})

export class MainComponent implements OnInit {

  constructor(private ar: ActivatedRoute, private ls: LoanService) {
    this.themeName = "themeDark";
    this.long = false;
    this.tf = false;
    this.short4 = "4";
    this.LoanID = null;
    this.themes = new Array<{name: string;}>();
    this.themes.push({name: "themeLight"});
    this.themes.push({name: "themeDark"});


  }

  private subscription: Subscription;


  public themes: Array<{name: string;}>;
  Loan: ILoan;
  private LoanID: string;
  userName: string;
  winUserName: string;
  emittedReComments(){
    this.tf = true;
  }

  CommentJSON: string;
  tf: boolean;
  long: boolean;
  short4: string;
  themeName: string;
  selChangeTheme(test: any){
    this.themeName = test.name;
    localStorage.setItem('theme',this.themeName);
  }
  changeTheme(){
    this.themeName = "themeDark";
  }
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
  getUpdatedComment(): string{
    if(this.CommentJSON == null)
      return "";
    else
      return this.CommentJSON;
  }
  onComment(CommentJ: string){
    this.CommentJSON = CommentJ;
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
    let trytheme = localStorage.getItem('theme');
    if(trytheme != null && trytheme.length > 0)
      this.themeName = trytheme;
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
