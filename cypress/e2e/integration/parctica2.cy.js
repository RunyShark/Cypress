require('cypress-xpath');

describe('parctica2', () => {
  it('test sidebar', () => {
    cy.visit(
      'https://www.cyberpuerta.mx/?gclid=Cj0KCQjwjryjBhD0ARIsAMLvnF8Y9NKq3hHZLjIgYU5A3iLAvyIQj6py3SEHdvvquiDSSke7O6tLbpMaAhEwEALw_wcB'
    )
      .title()
      .should('eq', 'Cyberpuerta.mx: Hardware, Computadoras, Laptops & Más')
      .get('#sidebar')
      .should('be.visible')
      .type('{pageup}')
      .get(
        '#sidebar > div.cp-main-menu-place-holder > div > div > div > a:nth-child(4)'
      )
      .should('be.visible')
      .type('{pageup}');
  });

  it('test 2', () => {
    cy.visit(
      'https://www.cyberpuerta.mx/?gclid=Cj0KCQjwjryjBhD0ARIsAMLvnF8Y9NKq3hHZLjIgYU5A3iLAvyIQj6py3SEHdvvquiDSSke7O6tLbpMaAhEwEALw_wcB'
    )
      .title()
      .should('eq', 'Cyberpuerta.mx: Hardware, Computadoras, Laptops & Más');
  });
});
