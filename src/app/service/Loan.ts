/**
 * Created by jdickinson on 2/6/2017.
 */
export interface ILoan {loanID: string;  unappliedOption: number; originalAmt: number; principalBal: number;
  escrowPmt: number; legalFeeBal: number; othFundBal: number; lossDraftBal: number; partialPaid: number;
  othFeeBal: number; prpetitionUnappliedBal: number; stipulationUnappliedBal: number; unappliedBal: number;
  lcBal: number; piPmp: number; othFundPmt: number; escrowBal: number; currencyType: string;
  pmtFrequency: number; deferredPrincipal: number; deferredInterest: number; dateLastContacted: Date;
  promisedByDate: Date; outcome: string; lastPmtRecvdDate: Date; lastUpdateDate: Date; lastLetterDt: Date;
  lastNSFDt: Date; lastInspRecvDt: Date; lastNSFCheck: string; outcomeDescription: string; borrowerName: string;
  borrowerSSN: string; coBorrowerName: string; coBorrowerSSN: string; investor: string; interestRate: number;
  paymentAmount: number;  inglePointOfContactName: string; numberOfPaymentsdue: number;
  dueDate: Date; primStat: string; loanType: string;
};

