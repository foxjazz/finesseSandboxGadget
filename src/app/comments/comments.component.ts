import { Component, OnInit } from '@angular/core';
import {CommentsService} from "./comments.service";
import {Comments} from "./Comments";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-comments',
  providers: [CommentsService],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  private subscription: Subscription;

  constructor(private cs: CommentsService, private ar: ActivatedRoute) {
    this.showComments = true; this.expando="Collapse"; this.setupBy = "not set";
    this.LoanID = "00000";

  }
  comments : Array<Comments>;
  comment : Comments;
  LoanID: string;
  //du: string;
  showComments: boolean;
  expando: string;
  inputComment: string;
  inputNote: string;
  inputAdditionalNote: string;
  setupBy: string;
  submitComments()
  {
    if(this.comments.length > 0) {
      this.comment = this.comments[0];
      this.comment.comment = this.inputComment;
      this.comment.notes = this.inputNote;
      this.comment.additionalNotes = this.inputAdditionalNote;
    }
    else{
      this.comment = {dateandTime: new Date(), additionalNotes: this.inputAdditionalNote, notes: this.inputNote,
        comment: this.inputComment, loanID: this.LoanID, daysAdvanceNot: 0, eventFrequency: 0,
        letterCode: null, sentToAttorney: 0, rightPartyContact: 0, qualityRightPartyContact: 0, exclude: 0,
        completedBy: null, setupBy: this.setupBy, completionDate: null, recordtype: 0 , department: 0 , retainPermanent:0,
        dueDate: null, Counter: 0};
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


     //let id = this.LoanID + "14544";
     //let id2: string;
    this.subscription = this.ar.queryParams.subscribe(
      (queryParam: any) => {
        this.LoanID = queryParam['LoanID'];
        this.cs.getComments(this.LoanID).subscribe(h => {
          this.comments = h;

        });
      }

    );




  }

}
