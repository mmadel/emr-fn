import { PhoneType } from "src/app/modules/common/models/enums/phone.type";

export interface Emergency {
    contactName: string;
    phoneType: PhoneType | null;
    phoneNumber: string;
    otherPhoneType: string;
    additionalInfo: string;
  }