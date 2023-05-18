import { AppointmentStatus } from "./appointment.status";
import { StatusHistoryValue } from "./status.history.value";

export interface Appointment {
    id: number;
    startDate: number;
    endDate: number;
    title: string;
    note: string;
    repeatId: number;

    appointmentStatus: AppointmentStatus;

    clinicId: number;

    patientId: number;

    patientCaseId: number;

    appointmentTypeId: number;

    statusHistoryValueModel: StatusHistoryValue;
}