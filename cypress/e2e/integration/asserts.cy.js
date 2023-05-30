describe('Assets contain', () => {
  it('contains', () =>
    cy
      .visit('https://testingqarvn.com.es/datos-personales/')
      .title()
      .should('eq', 'Datos Personales | TestingQaRvn')
      .get('#wsf-1-field-27')
      .contains('Submit'));

  it('find_equ', () =>
    cy
      .visit('https://testingqarvn.com.es/encuestas/')
      .title()
      .should('eq', 'Encuestas | TestingQaRvn')
      .get('.wsf-grid')
      .find('.wsf-label')
      .eq(0)
      .click());

  it('text_p1', () =>
    cy
      .visit('https://testingqarvn.com.es/encuestas/')
      .title()
      .should('eq', 'Encuestas | TestingQaRvn')
      .get('.wsf-grid')
      .find('.wsf-label')
      .eq(0)
      .then(
        (value) =>
          value.text() === 'Less than a month' && cy.log('texto compatible')
      ));

  it('text_p2', () =>
    cy
      .visit('https://testingqarvn.com.es/encuestas/')
      .title()
      .should('eq', 'Encuestas | TestingQaRvn')
      .get('.wsf-grid')
      .find('.wsf-label')
      .eq(0)
      .then(
        (value) =>
          value.text().slice(0, 4) === 'Less' && cy.log('texto compatible')
      ));

  it('text_p3', () =>
    cy
      .visit('https://testingqarvn.com.es/encuestas/')
      .title()
      .should('eq', 'Encuestas | TestingQaRvn')
      .get('.wsf-grid')
      .find('.wsf-label')
      .eq(0)
      .then((value) => Array.isArray(value.text().split()) && cy.log('ok')));

  it('have.text', () =>
    cy
      .visit('https://testingqarvn.com.es/encuestas/')
      .title()
      .should('eq', 'Encuestas | TestingQaRvn')
      .get('.wsf-grid')
      .find('.wsf-label')
      .eq(0)
      .should('have.text', 'Less than a month'));

  it('contain.text', () =>
    cy
      .visit('https://testingqarvn.com.es/encuestas/')
      .title()
      .should('eq', 'Encuestas | TestingQaRvn')
      .get('.wsf-grid')
      .find('.wsf-label')
      .eq(0)
      .should('contain.text', 'Less t'));

  it('have.class', () =>
    cy
      .visit('https://testingqarvn.com.es/encuestas/')
      .title()
      .should('eq', 'Encuestas | TestingQaRvn')
      .get('.wsf-grid')
      .find('.wsf-label')
      .eq(0)
      .should('have.class', 'wsf-label'));

  it('and', () =>
    cy
      .visit('https://testingqarvn.com.es/encuestas/')
      .title()
      .should('eq', 'Encuestas | TestingQaRvn')
      .get('.wsf-grid')
      .find('.wsf-label')
      .eq(0)
      .should('have.class', 'wsf-label')
      .and('be.visible'));

  it('not', () =>
    cy
      .visit('https://testingqarvn.com.es/encuestas/')
      .title()
      .should('eq', 'Encuestas | TestingQaRvn')
      .get('.wsf-grid')
      .find('.wsf-label')
      .eq(0)
      .should('have.class', 'wsf-label')
      .and('not.be.visible'));

  it.only('have.length', () =>
    cy
      .visit('https://testingqarvn.com.es/encuestas/')
      .title()
      .should('eq', 'Encuestas | TestingQaRvn')
      .get('.wsf-grid')
      .find('.wsf-label')
      .should('have.length', 49));
});
