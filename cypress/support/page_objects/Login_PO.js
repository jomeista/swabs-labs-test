/// <reference types="cypress" />

import Base_PO from "./Base_PO";

class Login_PO extends Base_PO {
  navigateTo_Login_Page() {
    super.navigate("");
  }
  
  type_Username(username) {
    cy.get('#user-name').type(username);
  }

  type_Password(password){
    cy.get('#password').type(password)
  }

  clickOn_Login_Button(){
    cy.get('#login-button').click()
  }
}
export default Login_PO;