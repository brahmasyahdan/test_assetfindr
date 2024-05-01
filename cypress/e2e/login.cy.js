describe("Login Test", () => {
  //positive test

  it('validate on login page', () => {
    cy.visit("/");
    cy.get('h2').should('have.text', 'Login');
  });

  it('can type text on field username', () => {
    cy.visit("/");
    cy.get('#username').type('admin').should('have.value', 'admin');
  });

  it('can type symbol on field username', () => {
    cy.visit("/");
    cy.get('#username').type('!@#$').should('have.value', '!@#$');
  });

  it('can type text on field password', () => {
    cy.visit("/");
    cy.get('#password').type('asdfg').should('have.value', 'asdfg');
  });

  it('can type number on field password', () => {
    cy.visit("/");
    cy.get('#password').type(12345).should('have.value', 12345);
  });

  it('can type symbol on field password', () => {
    cy.visit("/");
    cy.get('#password').type('!@#$%^').should('have.value', '!@#$%^');
  });

  it('login with valid username and password', () => {
    cy.visit("/");
    cy.get('#username').type('admin');
    cy.get('#password').type(123456);
    cy.get('button').click();
    cy.get('#loginMessage').should('be.visible').and('have.text', 'Login successful!');
  });

  // negative test

  it('Log in with a username that is limited to 25 characters', () => {
    cy.visit("/");
    cy.get('#username').type('admintest_2024-5-1@qwwer.com');
    cy.get('#password').type('123456');
    cy.get('button').click();
    // cy.get('#loginMessage').should('be.visible').and('have.text', 'Invalid username or password.');
    cy.get('#username').invoke('val').should('have.length', 25);
  });
  

  it('cant type space on field username', () => {
    cy.visit("/");
    cy.get('#username').type('admin 1').should('have.value', 'admin 1');
    cy.get('#password').type(123456);
    cy.get('button').click();
    cy.get('#loginMessage').should('be.visible').and('have.text', 'Username cannot include space')
  });

  it('cant type space on field password', () => {
    cy.visit("/");
    cy.get('#username').type('admin').should('have.value', 'admin 1');
    cy.get('#password').type('12345 6');
    cy.get('button').click();
    cy.get('#loginMessage').should('be.visible').and('have.text', 'Password cannot include space')
  });

  it('login with uppercase username', () => {
    cy.visit("/");
    cy.get('#username').type('ADMIN').should('have.value', 'ADMIN');
    cy.get('#password').type(123456);
    cy.get('button').click();
    cy.get('#loginMessage').should('be.visible').and('have.text', 'Invalid username or password.')
  });

  it('login with valid username and invalid password', () => {
    cy.visit("/");
    cy.get('#username').type('admin');
    cy.get('#password').type(54321);
    cy.get('button').click();
    cy.get('#loginMessage').should('be.visible').and('have.text', 'Invalid username or password.');
  });

  it('login with invalid username and valid password', () => {
    cy.visit("/");
    cy.get('#username').type('nimda');
    cy.get('#password').type(123456);
    cy.get('button').click();
    cy.get('#loginMessage').should('be.visible').and('have.text', 'Invalid username or password.');
  });

  it('login with invalid username and password', () => {
    cy.visit("/");
    cy.get('#username').type('nimda');
    cy.get('#password').type(98760);
    cy.get('button').click();
    cy.get('#loginMessage').should('be.visible').and('have.text', 'Invalid username or password.');
  });

  // boundary test

  it('login with empty username and password', () => {
    cy.visit("/");
    cy.get('#username').clear();
    cy.get('#password').clear();
    cy.get('button').click();
    cy.get('#loginMessage').should('be.visible').and('have.text', 'Please enter both username and password.');
  });
});
