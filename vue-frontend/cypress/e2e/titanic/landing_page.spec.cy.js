describe('Landing Page', () => {
  it('should display the landing page with correct elements', () => {
    cy.visit('/');
    cy.contains('h4', 'Survive Better');
    cy.contains('h1', 'Get Survival Predictions');
    cy.contains('p', 'This web application allows users to predict the survival chances of Titanic passengers based on various input parameters.').should('exist');
    cy.get('nav .nav-links a[href="#team"]').should('exist');
    cy.get('nav .nav-links a[href="#f-link"]').should('exist');
    cy.get('header .btn').contains('Prediction Calculator').should('exist');
    cy.get('footer h1').contains('Meet Our Team').should('exist');

    // Take screenshot after all checks
    cy.screenshot('Home Page');
  });
});
