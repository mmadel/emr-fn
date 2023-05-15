import { Address } from "../../common/models";
import { Gender } from "../../common/models/enums/geneder";
import { MaritalStatus } from "../../common/models/enums/marital.status";
import { Suffix } from "../../common/models/enums/suffix";
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
    gender: Gender | null;
    maritalStatus: MaritalStatus | null;
    suffix: Suffix | null;
    employerName: string;
    title: string;
    idType: string;
    patientId: string;
    effectiveFromDate: number;
    effectiveToDate: number;
    addresses: Address[];
    contacts: Contact[];
    emergencies: Emergency[];
    dependent: Dependent | null;
    clinicsId: number[];
    patientCaseModels: PatientCase[];
    patientInsuranceModels: PatientInsurance[];
}