import { InsuranceCompany } from "src/app/modules/insurance.company/models/insurance.company";

export interface PatientInsurance {
    id: number;
    insuranceNumber: string;
    groupNumber: string;
    paymentType: string;
    paymentValue: string;
    totalDeductible: string;
    visitAllowed: number;
    expirationDate: number;
    insuranceCompany: InsuranceCompany;
  }