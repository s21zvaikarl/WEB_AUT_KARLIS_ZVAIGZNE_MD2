import { loginPage } from '../support/page_objects/loginPage';
import { sidebar } from '../support/page_objects/sidebar';

describe('Appointment History Empty', () => {
  it('shows no appointment in history', () => {
    loginPage.visit();
    loginPage.clickMakeAppointment();
    loginPage.enterUsername('John Doe');
    loginPage.enterPassword('ThisIsNotAPassword');
    loginPage.clickLogin();

    sidebar.openMenu();
    sidebar.validateSidebarIsActive();
    sidebar.clickHistory();
    sidebar.validateNoAppointmentMessage();
  });
});
