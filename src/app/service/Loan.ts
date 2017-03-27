/**
 * Created by jdickinson on 2/6/2017.
 */
export interface ILoan {loanID: string;  originalAmt: number; principalBal: number;
  escrowPmt: number; legalFeeBal: number;
  lcBal: number; piPmp: number;  currencyType: string;  pmtFrequency: number;
    dateLastContacted: Date;
  promisedByDate: Date; outcome: string; lastPmtRecvdDate: Date; lastUpdateDate: Date;
  lastLetterDt: Date;  lastNSFDt: Date; lastNSFCheck: string; outcomeDescription: string;
  borrowerName: string;  borrowerSSN: string;
  coBorrowerName: string; coBorrowerSSN: string;
  investor: string; interestRate: number;  paymentAmount: number;
  spoc: string; numberOfPaymentsDue: number;
  dueDate: Date; primStat: string; loanType: string; collector: string; legal: string; warning: string; criticalDisplayFlag: boolean; criticalWarning: string;
  employmentStatus: boolean; selfEmployed: boolean;
};

