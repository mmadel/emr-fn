import { CaseInsurance } from "./case.insurance";

export interface CaseInsuranceInformation {
    isSelfPay: boolean;
    selfPayAmount: number;
    primaryInsurance: CaseInsurance;
    secondaryInsurance: CaseInsurance;
  }