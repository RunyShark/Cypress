describe('type enter', () => {
  it('cuando presionen entre', () =>
    cy
      .visit('https://www.google.com/')
      .title()
      .should('eq', 'Google')
      .log('Ok')
      .get('#APjFqb')
      .type(`peso pluma {enter}`)
      .get(
        '#\38 uZuZMSCLbSlptQPt5yp8Ak__49 > div > div > div:nth-child(2) > div > div.L3Ezfd'
      )
      .click(50, 50));
});
