import { Address } from "../../common/models";
import { PatientCase } from "./case/patient.case";
import { Dependent } from "./dependent/patient.dependent";
import { Emergency } from "./emergency/patient.emergency";
import { PatientInsurance } from "./insurance/patient.insurance";
import { Contact } from "./patient.contact";

export interface Patient {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    birthDate: number;
    maritalStatus: string;
    suffix: string;
    employerName: string;
    title: string;
    idType: string;
    patientId: string;
    effectiveFromDate: number;
    effectiveToDate: number;
    addresses: Address[];
    contacts: Contact[];
    emergencies: Emergency[];
    dependent: Dependent |null;
    clinicsId: number[];
    patientCaseModels: PatientCase[];
    patientInsuranceModels: PatientInsurance[];
}