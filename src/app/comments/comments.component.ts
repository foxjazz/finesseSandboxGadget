import { Component, OnInit } from '@angular/core';
import {CommentsService} from "./comments.service";
import {Comments} from "./Comments";

@Component({
  selector: 'app-comments',
  providers: [CommentsService],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(public cs: CommentsService) { this.showComments = true; this.expando="Collapse";}
  comments : Array<Comments>;
  comment : Comments;
  LoanID: string;
  //du: string;
  showComments: boolean;
  expando: string;
  inputComment: string;
  inputNote: string;
  inputAdditionalNote: string;
  submitComments()
  {
    if(this.comments.length > 0) {
      this.comment = this.comments[0];
      this.comment.comment = this.inputComment;
      this.comment.notes = this.inputNote;
      this.comment.additionalNotes = this.inputAdditionalNote;
    }
    this.cs.Add(this.comment);
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
  onChangedLoanID(){
    let id = this.LoanID;
    if(id.length === 10)
      this.cs.getComments(id).subscribe(h => {
        this.comments = h;
      });

  }
  onUsingTable(cmt: Comments)
  {
      this.comment = cmt;
  }
  ngOnInit() {
     this.LoanID = "00000";
     let id = this.LoanID + "14544";
    this.cs.getComments(id).subscribe(h => {
      this.comments = h;
    });

  }

}
