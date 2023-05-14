import { Address } from "../../../common/models/address";

export interface Dependent {
    isDependent: boolean;
    address: Address;
    phone: string;
  }