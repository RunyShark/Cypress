import '@4tw/cypress-drag-drop';

describe('Alert', () => {
  it('Alert', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
      .title()
      .should('eq', 'The Internet');

    for (let i = 1; i < 3; i++) cy.get(`:nth-child(${i}) > button`).click();
  });
});
