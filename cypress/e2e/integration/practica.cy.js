require('cypress-plugin-tab');

describe('practica', () => {
  it('ss', () => {
    cy.visit('https://computer-database.gatling.io/computers')
      .get('#searchbox')
      .type('ACE')
      .get('#searchsubmit')
      .should('be.visible')
      .click()
      .get('#add')
      .should('be.visible')
      .click()
      .get('#name')
      .should('be.visible')
      .type('PC Gamer')
      .get('#introduced')
      .should('be.visible')
      .type('2021-03-16')
      .tab()
      .should('be.visible')
      .type('2021-03-26')
      .get('#company')
      .should('be.visible')
      .select('Nokia')
      .should('have.value', '16')
      .get('#main > form > div > input')
      .click();
  });
});
