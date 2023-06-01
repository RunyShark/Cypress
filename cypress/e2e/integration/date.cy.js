import 'cypress-xpath';

describe('date', () => {
  it('date', () => {
    cy.visit('https://admin-demo.nopcommerce.com/Admin/Order/ShipmentList')
      .title()
      .should('eq', 'Datos Personales | TestingQaRvn')
      .contains('Log in')
      .click();
  });
});
