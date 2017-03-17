/**
 * Created by jdickinson on 1/16/2017.
 */
export interface IComment{

  dateandTime: Date; loanID :string; recordtype: number; department:number;
  comment :string; retainPermanent :number; daysAdvanceNot:number; dueDate:Date;
  completionDate:Date;eventFrequency:number;completedBy:string;setupBy:string;letterCode:string;
  sentToAttorney:number;rightPartyContact:number;qualityRightPartyContact:number;exclude:number;
  notes:string;additionalNotes:string; Counter: number;
  callBound: string;
  dialedNumber: string;
  callRec: boolean;
  demographic: boolean;
  bestNumber: string;
  permissionToLeaveMessage: boolean;
  placeOfEmploymentName: string;
  placeOfEmploymentNumber: string;
  emailAddress: string;
  Occupancy: string;
  requestedTotalPastDue: boolean;
  borrowersIntent: string;
  reasonForDeliquency: string;
}

export class Comment implements IComment{

  dateandTime: Date; loanID :string; recordtype: number; department:number;
  comment :string; retainPermanent :number; daysAdvanceNot:number; dueDate:Date;
  completionDate:Date;eventFrequency:number;completedBy:string;setupBy:string;letterCode:string;
  sentToAttorney:number;rightPartyContact:number;qualityRightPartyContact:number;exclude:number;
  notes:string;additionalNotes:string; Counter: number;

  callBound: string;
  dialedNumber: string;
  callRec: boolean;
  demographic: boolean;
  bestNumber: string;
  permissionToLeaveMessage: boolean;
  placeOfEmploymentName: string;
  placeOfEmploymentNumber: string;
  emailAddress: string;
  Occupancy: string;
  requestedTotalPastDue: boolean;
  borrowersIntent: string;
  reasonForDeliquency: string;

}

  export interface ICommentList{description: string;}
//{"dateandTime":"1900-01-01T05:03:00.3","loanID":"0000014544","recordtype":0,"department":2,"comment":"Prior Servicer Comment","retainPermanent":0,"daysAdvanceNot":0,"dueDate":"0001-01-01T00:00:00","completionDate":"0001-01-01T00:00:00","eventFrequency":0,"completedBy":null,"setupBy":"Ryan Hagerty","letterCode":null,"sentToAttorney":0,"rightPartyContact":0,"qualityRightPartyContact":0,"exclude":0,"notes":null,"additionalNotes":"POSTPONEMENT OF FORECLOSURE SALE REQUIRES ESCALATION TO A SUPERVISOR"}
