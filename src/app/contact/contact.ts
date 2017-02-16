/**
 * Created by jdickinson on 2/8/2017.
 */
export interface IContact{
  loanID: string;

  dateLastContacted: Date;
  demeanor: string;
  outcome: string;
  reason: string;
  followUpDt: Date;
  promiseAmt: number;
  promisedByDate: Date;

  promiseAmt2: number;
  promiseDate2: Date;
  promiseAmt3: number;
  promiseDate3: Date;



}

export class Contact implements IContact{

  loanID: string;
  dateLastContacted: Date;
  demeanor: string;
  outcome: string;
  reason: string;
  followUpDt: Date;
  promiseAmt: number;
  promisedByDate: Date;

  promiseAmt2: number;
  promiseDate2: Date;
  promiseAmt3: number;
  promiseDate3: Date;

}
