describe('enter test', () => {
  it('type enter', () =>
    cy
      .visit('https://www.google.com/')
      .title()
      .should('eq', 'Google')
      .log('Ok')
      .get('#APjFqb')
      .type(`peso pluma {enter}`)

      .click(50, 50));
});
