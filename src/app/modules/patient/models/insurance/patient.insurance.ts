import { PaymentType } from "src/app/modules/common/models/enums/payment.type";
import { InsuranceCompany } from "src/app/modules/insurance.company/models/insurance.company";

export interface PatientInsurance {
  id: number | null;
  insuranceNumber: string;
  groupNumber: string;
  paymentType: PaymentType | null;
  paymentValue: string;
  totalDeductible: string;
  visitAllowed: number | null;
  expirationDate: number | null;
  expirationDate_Date: Date | null;
  insuranceCompany: InsuranceCompany | null;
}