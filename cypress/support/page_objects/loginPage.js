class LoginPage {
    visit() {
      cy.visit('https://katalon-demo-cura.herokuapp.com/');
    }
  
    clickMakeAppointment() {
      cy.get('#btn-make-appointment').click();
    }
  
    enterUsername(username) {
      cy.get('#txt-username').type(username);
    }
  
    enterPassword(password) {
      cy.get('#txt-password').type(password);
    }
  
    clickLogin() {
      cy.get('#btn-login').click();
    }
  }
  
  export const loginPage = new LoginPage();
  