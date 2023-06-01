import '@4tw/cypress-drag-drop';

describe('mouse', () => {
  it('dag an drop', () => {
    cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
      .title()
      .should('eq', 'The Internet')
      .get('#column-a')
      .drag('#column-b', { force: true });
  });

  it.only('hover', () => {
    cy.visit('https://www.federico-toledo.com/')
      .title()
      .should('eq', 'Federico Toledo -')
      .get('#menu-item-2607')
      .trigger('mouseover');
  });
});
