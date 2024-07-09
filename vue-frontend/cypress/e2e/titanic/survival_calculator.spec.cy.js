describe('Survival Calculator', () => {
  beforeEach(() => {
    cy.visit('/predict');
  });

  it('should have all the necessary input fields', () => {
    cy.get('select[id="dropdown1"]').should('exist');
    cy.get('select[id="dropdown2"]').should('exist');
    cy.get('select[id="dropdown3"]').should('exist');
    cy.get('input[id="slider1"]').should('exist');
    cy.get('input[id="slider2"]').should('exist');
    cy.get('select[id="dropdown4"]').should('exist');
    cy.get('select[id="dropdown5"]').should('exist');
  });

  it('should display prediction results', () => {
    cy.get('select[id="dropdown1"]').select('First');
    cy.get('select[id="dropdown2"]').select('Male');
    cy.get('input[id="slider1"]').invoke('val', 30).trigger('input');
    cy.get('input[id="slider2"]').invoke('val', 100).trigger('input');
    cy.get('select[id="dropdown3"]').select('Cherbourg');
    cy.get('select[id="dropdown4"]').select('Random Forest');
    cy.get('select[id="dropdown5"]').select('Yes');
    cy.get('button[type="submit"]').click();
    cy.wait(1000); // Wait for the response

    // Take screenshot after all checks
    cy.screenshot('Survival Calculator');
  });

  it('should reset the form fields', () => {
    // Fill the form
    cy.get('select[id="dropdown1"]').select('First');
    cy.get('select[id="dropdown2"]').select('Male');
    cy.get('input[id="slider1"]').invoke('val', 30).trigger('input');
    cy.get('input[id="slider2"]').invoke('val', 100).trigger('input');
    cy.get('select[id="dropdown3"]').select('Cherbourg');
    cy.get('select[id="dropdown4"]').select('Random Forest');
    cy.get('select[id="dropdown5"]').select('Yes');

    // Reset the form
    cy.get('button[type="reset"]').click();
  });

  
  it('should navigate to Home and Learn Basics pages', () => {
    // Navigate to Home
    cy.get('nav').within(() => {
      cy.contains('button', 'Home').click();
    });
    cy.url().should('include', '/');
  
    // Navigate to Learn Basics
    cy.get('nav').within(() => {
      cy.contains('button', 'Learn Basics').click();
    });
    cy.url().should('include', '/basics');
  });
});
