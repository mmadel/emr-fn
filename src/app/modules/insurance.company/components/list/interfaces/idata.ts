import { InsuranceCompany } from "../../../models/insurance.company";

export interface IData {
    number_of_records: number;
    number_of_matching_records: number;
    records: InsuranceCompany[];
  }