import UserData from "../fixtures/userData.json";
import LoginPage from "../pages/loginPage";

const loginPage = new LoginPage();

describe("Login Real World App", () => {
  it("Login - Sucess", () => {
    loginPage.acessingLoginPage();
    loginPage.loginWithUser(
      UserData.UserSuccess.username,
      UserData.UserSuccess.password
    );
  });

  it("Login - Fail", () => {
    loginPage.acessingLoginPage();
    loginPage.loginWithUser(
      UserData.UserFail.username,
      UserData.UserFail.password
    );
    loginPage.checkAccessInvalidUser();
  });
});
