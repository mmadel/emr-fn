import { Address } from "src/app/models/address";

export interface InsuranceCompany {
  id: number | null;
  name: string | null;
  insuranceType: string | null;
  phone: string | null;
  fax: string | null;
  addresses: Address[] | null;
  clinicId: number | null;
}