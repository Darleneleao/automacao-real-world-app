class RegisterPage {
  selectorsList() {
    const selectors = {
      firstNameField: "[name='firstName']",
      lastNameField: "[name='lastName']",
      userNameField: "[name='username']",
      passwordField: "[name='password']",
      confirmPasswordField: "[name='confirmPassword']",
      signUpButton: "[type='submit']",
    };
    return selectors;
  }

  accessingRegisterPage() {
    cy.visit("/signup");
  }

  registerWithUser(firstName, lastName, userName, password, confirmPassword) {
    cy.get(this.selectorsList().firstNameField).type(firstName);
    cy.get(this.selectorsList().lastNameField).type(lastName);
    cy.get(this.selectorsList().userNameField).type(userName);
    cy.get(this.selectorsList().passwordField).type(password);
    cy.get(this.selectorsList().confirmPasswordField).type(confirmPassword);
  }

  signUpButton() {
    cy.get(this.selectorsList().signUpButton).click();
  }
}

export default RegisterPage;
