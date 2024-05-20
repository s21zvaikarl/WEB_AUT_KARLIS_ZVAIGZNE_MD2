class Sidebar {
    openMenu() {
      cy.get('#menu-toggle').click();
    }
  
    validateSidebarIsActive() {
      cy.get('#sidebar-wrapper').should('have.class', 'active');
    }
  
    clickHistory() {
      cy.get('#sidebar-wrapper').contains('History').click();
    }
  
    validateNoAppointmentMessage() {
      cy.get('.col-sm-12').should('contain', 'No appointment');
    }
  }
  
  export const sidebar = new Sidebar();
  