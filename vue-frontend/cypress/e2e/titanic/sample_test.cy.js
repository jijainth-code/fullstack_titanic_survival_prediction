describe('Sample Test', () => {
  it('should visit the app', () => {
    cy.visit('/');
  });

  describe('Navigation Test', () => {
    it('should navigate to Home and Learn Basics pages', () => {
      cy.visit('/');
  
      // Ensure the Learn Basics button is visible and click it
      cy.contains('button', 'Learn Basics').should('be.visible').click();
      cy.url().should('include', '/basics');
      
      // Check if the Learn Basics page has the correct heading
      cy.get('h1').should('contain.text', 'Titanic Survivor Prediction App');
      cy.screenshot('Learn Basics Page');
      cy.go('back');
  
      // Ensure the Prediction Calculator button is visible and click it
      cy.contains('button', 'Prediction Calculator').should('be.visible').click();
      cy.url().should('include', '/predict');
      
      // Check if the Prediction Calculator page has the correct heading
      cy.get('h1').should('contain.text', 'Titanic Survivor Prediction App');
      cy.screenshot('Prediction Calculator Page');
    });
  });

  afterEach(() => {
    // Take a screenshot after each test
    cy.screenshot();
  });
});

describe('Data Verification', () => {
  it('should check data on the home page', () => {
    cy.visit('/');

    // Check the main heading
    cy.get('h1').should('contain.text', 'Get Survival Predictions');

    // Check the subheading
    cy.get('h4').should('contain.text', 'Survive Better');

    // Check the presence of the paragraph text
    cy.get('p').should('contain.text', 'This web application allows users to predict the survival chances of Titanic passengers based on various input parameters. Our goal is to showcase the application of machine learning models in a real-world scenario.');

    // Check the presence of the "Learn Basics" button
    cy.contains('button', 'Learn Basics').should('exist');

    // Check the presence of the "Prediction Calculator" button
    cy.contains('button', 'Prediction Calculator').should('exist');
  });

  it('should verify data on the Learn Basics page and navigate to Prediction Calculator page', () => {
    // Navigate to Learn Basics page
    cy.visit('/');
    cy.contains('button', 'Learn Basics').should('be.visible').click();
    cy.url().should('include', '/basics');

    // Verify the Learn Basics page content
    cy.get('h1').should('contain.text', 'Titanic Survivor Prediction App');
    cy.screenshot('Learn Basics Page Data Verification');

    // Navigate to Prediction Calculator page
    cy.contains('button', 'Prediction Calculator').should('be.visible').click();
    cy.url().should('include', '/predict');

    // Verify the Prediction Calculator page content
    cy.get('h1').should('contain.text', 'Titanic Survivor Prediction App');
    cy.screenshot('Prediction Calculator Page Data Verification');
  });

  afterEach(() => {
    // Take a screenshot after each test
    cy.screenshot();
  });
});
