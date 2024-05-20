class AppointmentPage {
    selectFacility(facility) {
      cy.get('#combo_facility').select(facility);
    }
  
    checkHospitalReadmission() {
      cy.get('#chk_hospotal_readmission').check();
    }
  
    selectHealthcareProgram(program) {
      cy.get(`input[type="radio"][value="${program}"]`).check();
    }
  
    setDate(date) {
      cy.get('#txt_visit_date').click();
      cy.get('.datepicker-days').contains(date).click();
    }
  
    setComment(comment) {
      cy.get('#txt_comment').type(comment);
    }
  
    clickBookAppointment() {
      cy.get('#btn-book-appointment').click();
    }
  
    validateAppointmentDetails({facility, readmission, program, date, comment}) {
      cy.get('#facility').should('contain', facility);
      cy.get('#hospital_readmission').should('contain', readmission);
      cy.get('#program').should('contain', program);
      cy.get('#visit_date').should('contain', date);
      cy.get('#comment').should('contain', comment);
    }
  }
  
  export const appointmentPage = new AppointmentPage();
  