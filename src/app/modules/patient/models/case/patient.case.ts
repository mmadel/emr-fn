import { CaseDiagnosis } from "./case.diagnosis";
import { CaseOtherInformation } from "./case.other.information";
import { CaseInsuranceInformation } from "./case.insurance.info";
import { TreatingDoctor } from "./case.treating.doctor";
import { ReferralCase } from "./case.referral";

export interface PatientCase {
    id: number;
    title: string;
    placeOfService: string;
    treatingDoctor: TreatingDoctor;
    injuryCase: string;
    caseInsuranceInformation: CaseInsuranceInformation;
    caseDiagnosis: CaseDiagnosis[];
    referralCase: ReferralCase;
    caseOtherInformation: CaseOtherInformation;
}