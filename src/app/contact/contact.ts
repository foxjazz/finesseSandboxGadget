/**
 * Created by jdickinson on 2/8/2017.
 */
export interface IContact{
  loanID: string;

  dateLastContacted: Date;
  demeanor: string;
  demeanorcode: string;

  outcome: string;
  outcomecode:string;
  reason: string;
  reasoncode: string;
  followUpDt: Date;
  promiseAmt: number;
  promisedByDate: Date;

  promiseAmt2: number;
  promiseDate2: Date;
  promiseAmt3: number;
  promiseDate3: Date;
  setupBy: string;



}

export class Contact implements IContact{

  constructor() {}

  loanID: string;
  dateLastContacted: Date;
  demeanor: string;
  demeanorcode: string;
  outcome: string;
  outcomecode: string;
  reason: string;
  reasoncode: string;
  followUpDt: Date;
  promiseAmt: number;
  promisedByDate: Date;

  promiseAmt2: number;
  promiseDate2: Date;
  promiseAmt3: number;
  promiseDate3: Date;
  setupBy: string;



}
