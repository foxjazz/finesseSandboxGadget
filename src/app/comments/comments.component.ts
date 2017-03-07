import {Component, OnInit, Input} from '@angular/core';
import {LoanService} from "../service/loan.service";
import {Comment, ICommentList, IComment} from "./Comments";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {ILoan} from "../service/Loan";

@Component({
  selector: 'app-comments',
  providers: [LoanService],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  private subscription: Subscription;

  constructor( lsi: LoanService, private ar: ActivatedRoute) {

    this.saveButton = "Add Comment";
    this.showComments = true; this.expando="Collapse"; this.setupBy = "not set";
    this.ls = lsi;
    this.comments = new Array<Comment>();
    this.comment = new Comment();
    this.gacFlag = false;
  }


  @Input('loan')
  set loan(l: ILoan){
    this.Loan = l;
    this.ls.getComments(this.Loan.loanID).subscribe(c => {
      this.saveButton = "Add Comment";
      this.comments  = c;
      this.gacFlag = false;
    });
  }
  get loan(): ILoan{
    return this.Loan;
  }

  @Input('refreshComments')
  set rc(b: boolean){
    if(b) {
      this.ls.getComments(this.Loan.loanID).subscribe(c => {
        this.saveButton = "Add Comment";
        this.comments = c;
        this.gacFlag = false;
      });
    }
  }
  get rc():boolean{
    return false;
  }

  @Input() userName: string;
  @Input()
  set UpdatedComment(uc: string)
  {
    if(uc.length != 0) {
      this.updatedComment = uc;
      this.comment = JSON.parse(uc);
      this.updateComment();
    }
  }
  get UpdateComment(): string{
    return this.updatedComment;
  }
  private gacFlag: boolean;
  updatedComment: string;
  comments: Array<Comment>;
  ls: LoanService;

  Loan: ILoan;
  saveButton:string;
  comment : Comment;
  LoanID: string;
  //du: string;
  showComments: boolean;
  expando: string;
  inputComment: string;
  inputNote: string;
  inputAdditionalNote: string;
  setupBy: string;
  ucomment: string;
  getLoan(): ILoan{
    return this.Loan;
  }
  updateComment()
  {
    this.comment.loanID = this.Loan.loanID;
    this.comment.dateandTime = new Date();
    if(this.setupBy == null)
      this.setupBy = "test gadget";
    if(this.userName != null && this.userName.length > 0)
      this.comment.setupBy = this.userName;
    if(this.comment.comment.length > 0 && this.comment.additionalNotes.length > 0) {
      this.saveButton = "Comment Added";
      this.ls.saveget('Comments', JSON.stringify(this.comment), this.Loan.loanID).subscribe(x => {
        console.log(x);
        this.comments = x;
        this.gacFlag = false;
      });
    }

  }
  onToggleDu(){
    if(this.showComments) {
      //this.du = "up";
      this.showComments = false;
      this.expando = "Expand"
    }
    else {
      //this.du = "down";
      this.showComments = true;
      this.expando = "Collapse"
    }
  }
 /* onChangedLoanID(){
    let id = this.LoanID;
    if(id.length === 10)
      this.ls.getComments(id).subscribe(h => {
        this.comments = h;
      });

  }
  onCommentSelect(c: any){
    this.ucomment = c.description;
  }*/
  onUsingTable(cmt: Comment)
  {
      this.comment = cmt;
  }
  commentList: Array<ICommentList>;

  refresh(){
    this.saveButton = "Add Comment";
    this.ls.getComments(this.Loan.loanID).subscribe(c => {
      this.comments  = c;
      this.gacFlag = false;
    });
  }

  getCommentsAll(){
    if(this.gacFlag == true)
      return;
    this.gacFlag = true;
    this.ls.getAllComments(this.Loan.loanID).subscribe(c => {
      this.comments  = c;
    });
  }
  ngOnInit() {


     //let id = this.LoanID + "14544";
     //let id2: string;
    this.commentList = new Array<ICommentList>();
    this.ls.getCommentList().subscribe(cr => {
       this.commentList = cr;
    });

    this.subscription = this.ar.queryParams.subscribe(
      (queryParam: any) => {
        this.LoanID = queryParam['LoanID'];
        if(this.LoanID != null) {
          this.ls.getComments(this.LoanID).subscribe(h => {
            this.comments = h;
            this.gacFlag = false;

          });
        }
      }

    );




  }

}
