import { CaseDiagnosis } from "./case.diagnosis";
import { CaseOtherInformation } from "./case.other.information";
import { CaseInsuranceInformation } from "./case.insurance.info";
import { TreatingDoctor } from "./case.treating.doctor";
import { ReferralCase } from "./case.referral";
import { PlaceOfService } from "src/app/modules/common/models/enums/place.service";

export interface PatientCase {
    id: number;
    title: string;
    placeOfService: PlaceOfService | null;
    treatingDoctor: TreatingDoctor | null;
    injuryCase: string;
    caseInsuranceInformation: CaseInsuranceInformation | null;
    caseDiagnosis: CaseDiagnosis[] | null;
    referralCase: ReferralCase | null;
    caseOtherInformation: CaseOtherInformation | null;
}