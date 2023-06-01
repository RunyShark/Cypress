describe('each', () => {
  it('dag an drop', () => {
    cy.visit('https://www.federico-toledo.com/')
      .title()
      .should('eq', 'Federico Toledo -');
  });
});
