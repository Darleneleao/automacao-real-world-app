import UserData from "../fixtures/userData.json";
import RegisterPage from "../pages/registerPage";

const registerPage = new RegisterPage();

describe("Register Real World App", () => {
  it("Register - Success", () => {
    registerPage.accessingRegisterPage();
    registerPage.registerWithUser(
      UserData.UserRegisterSuccess.firstName,
      UserData.UserRegisterSuccess.lastName,
      UserData.UserRegisterSuccess.username,
      UserData.UserRegisterSuccess.password,
      UserData.UserRegisterSuccess.confirmPassword
    );
    registerPage.signUpButton();
  });

  it("Register - Fail", () => {
    registerPage.accessingRegisterPage();
    registerPage.registerWithUser(
      UserData.UserRegisterFail.firstName,
      UserData.UserRegisterFail.lastName,
      UserData.UserRegisterFail.username,
      UserData.UserRegisterFail.password,
      UserData.UserRegisterFail.confirmPassword
    );
  });
});
