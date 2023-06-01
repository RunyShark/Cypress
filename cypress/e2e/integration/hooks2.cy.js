describe('hooke', () => {
  before(() =>
    cy
      .visit('https://opensource-demo.orangehrmlive.com/')
      .title()
      .should('eq', 'OrangeHRM')
      .get('[name="username"]')
      .should('be.visible')
      .type('Admin')
      .get('[name="password"]')
      .should('be.visible')
      .type('admin123')
      .get('[type="submit"]')
      .click()
  );
});
