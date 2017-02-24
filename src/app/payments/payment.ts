/**
 * Created by jdickinson on 2/10/2017.
 */

export interface payment{loanID: string; name1: string;
endLCAccrBal: number; assistanceAmt: number; lateChargeAmt: number;
endEscrowBal: number; escrowAmt: number; endPrincipalBal: number;
transactionAmt: number; dueDate: Date;
transactionDate: Date; principalAmount: number; interestAmount: number;
feeDesc: string; tcDesc: string; etDesc: string;
borrFullName: string; checkNumber: string; payeeName: string;
effectiveDate: Date; invoiceNumber: string;
}

