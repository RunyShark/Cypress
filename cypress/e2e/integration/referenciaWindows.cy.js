describe('referencias windows', () => {
  it('Windows document', () =>
    cy
      .visit('https://www.federico-toledo.com/')
      .title()
      .should('eq', 'Federico Toledo -')
      .document()
      .should('have.property', 'charset')
      .and('eq', 'UTF-8'));

  it('URL', () =>
    cy
      .visit('https://www.federico-toledo.com/')
      .title()
      .should('eq', 'Federico Toledo -')
      .url()
      .should('include', 'https://www.fede')
      .should('eq', 'https://www.federico-toledo.com/'));
});
