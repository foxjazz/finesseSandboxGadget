import {Component, OnInit, Input} from '@angular/core';
import {IAuthorizedUser} from "../service/AuthorizedUser";
import {LoanService} from "../service/loan.service";
import {ILoan} from "../service/Loan";

@Component({
  selector: 'app-authorized-users',
  providers: [LoanService],
  templateUrl: './authorized-users.component.html',
  styleUrls: ['./authorized-users.component.css']
})
export class AuthorizedUsersComponent implements OnInit {

  constructor(private ls: LoanService) { this.aul = new Array<IAuthorizedUser>(); }

  public Loan: ILoan;
  aul: Array<IAuthorizedUser>

  @Input('loan')
  set loan(l: ILoan){
    this.Loan = l;
    this.ls.getAuthorizedUsers(this.Loan.loanID).subscribe(aul => {
      this.aul = aul;
    })
  }
  get loan(): ILoan{
    return this.Loan;
  }


  ngOnInit() {
  }

}
