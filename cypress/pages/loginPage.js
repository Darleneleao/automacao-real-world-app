class LoginPage {
  selctorsList() {
    const selectors = {
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      loginButton: "[type='submit']",
      errorMessage: "[role='alert']",
    };
    return selectors;
  }

  acessingLoginPage() {
    cy.visit("/signin");
  }

  loginWithUser(username, password) {
    cy.get(this.selctorsList().usernameField).type(username);
    cy.get(this.selctorsList().passwordField).type(password);
    cy.get(this.selctorsList().loginButton).click();
  }

  checkAccessInvalidUser() {
    cy.get(this.selctorsList().errorMessage);
  }
}

export default LoginPage;
