import { Address } from "src/app/models/address";

export interface InsuranceCompany {
  id: number;
  name: string;
  insuranceType: string;
  phone: string;
  fax: string;
  addresses: Address[];
  clinicId: number;
}