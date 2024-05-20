import { loginPage } from '../support/page_objects/loginPage';
import { appointmentPage } from '../support/page_objects/appointmentPage';

describe('Make an Appointment', () => {
  it('books an appointment successfully', () => {
    loginPage.visit();
    loginPage.clickMakeAppointment();
    loginPage.enterUsername('John Doe');
    loginPage.enterPassword('ThisIsNotAPassword');
    loginPage.clickLogin();

    const appointmentDetails = {
      facility: 'Seoul CURA Healthcare Center',
      readmission: 'Yes',
      program: 'Medicaid',
      date: '30/05/2024', 
      comment: 'CURA Healthcare Service'
    };

    appointmentPage.selectFacility(appointmentDetails.facility);
    appointmentPage.checkHospitalReadmission();
    appointmentPage.selectHealthcareProgram(appointmentDetails.program);
    appointmentPage.setDate('30');
    appointmentPage.setComment(appointmentDetails.comment);
    appointmentPage.clickBookAppointment();
    appointmentPage.validateAppointmentDetails(appointmentDetails);
  });
});
