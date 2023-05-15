import { Address } from "../../../common/models/address";

export interface Dependent {
  address: Address | null;
  phone: string | null;
  name: string | null;
}