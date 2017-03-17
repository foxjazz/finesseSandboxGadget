import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {ILoan} from "../service/Loan";
import {Comment, ICommentList} from "../comments/Comments";
import {LoanService} from "../service/loan.service";

@Component({
  selector: 'app-comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.css']
})

export class CommentInputComponent implements OnInit {

  constructor(private ls: LoanService) {
    this.saveButton = "Add Comment";
    this.setupBy = "not set";
    this.comment = new Comment();
    this.hasAdditionalNotes = true;
    this.hasComment = true;
  }


  @Output() OnGotComments = new EventEmitter<string>();
  @Input() userName: string;
  comments: Array<Comment>;
  Loan: ILoan;
  saveButton:string;
  onCommentSelect(c: any){
    this.inputComment = c.description;
  }

  //Extended




  //End of extended

  hasAdditionalNotes: boolean;
  hasComment: boolean;
  comment: Comment;
  inputAdditionalNote: string;
  inputComment: string;
  setupBy: string;
  commentList: Array<ICommentList>;

  get isCommentRed(): string{
    if(this.hasComment === false)
      return "red";
    else
      return ""
  }

  get isAddNoteRed(): string{
    if(this.hasAdditionalNotes === false)
      return "red";
    else
      return ""
  }
  onSubmit()
  {
    if(this.comment == null)
      this.comment = new Comment();


    this.comment.dateandTime = new Date();

    if(this.userName != null && this.userName.length > 0)
      this.comment.setupBy = this.userName;
    this.comment.comment = this.inputComment;
    this.comment.additionalNotes = this.inputAdditionalNote;
    if(this.comment.comment && this.comment.additionalNotes && this.comment.comment.length > 0 && this.comment.additionalNotes.length > 0) {
      this.hasComment = true;
      this.hasAdditionalNotes = true;
      this.saveButton = "Comment Added";
      this.OnGotComments.emit(JSON.stringify(this.comment));
/*
      this.ls.saveget('Comments', JSON.stringify(this.comment), this.Loan.loanID).subscribe(x => {
        console.log(x);
        this.comments = x;
        this.OnGotComments.emit(true);
      });
*/
    }
    else{
      if(!this.inputComment || this.inputComment.length === 0)
        this.hasComment = false;
      if(!this.inputAdditionalNote || this.inputAdditionalNote.length === 0)
        this.hasAdditionalNotes = false;
    }

  }

  ngOnInit() {
    this.commentList = new Array<ICommentList>();
    this.ls.getCommentList().subscribe(cr => {
      this.commentList = cr;
    });
  }

}
