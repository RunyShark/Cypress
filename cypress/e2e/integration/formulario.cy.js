describe('Welcome to the cypress course', () => {
  it('Validating the page title', () => {
    cy.visit('https://testingqarvn.com.es/');
    cy.title('cypress');
    cy.log('test ok');
  });

  it('fill in the form fields', () => {
    cy.visit('https://testingqarvn.com.es/datos-personales/');
    [
      {
        id: 'wsf-1-field-21',
        type: 'Dario',
      },
      {
        id: 'wsf-1-field-22',
        type: 'Moreno Sosa',
      },
      {
        id: 'wsf-1-field-23',
        type: 'correro@correo.com',
      },
      {
        id: 'wsf-1-field-24',
        type: 22838383,
      },
      {
        id: 'wsf-1-field-28',
        type: 'Wenas',
      },
    ].forEach(({ id, type }) => cy.get(`#${id}`).type(type));
    cy.get('#wsf-1-field-27').click();
    cy.log('test ok');
  });
});
