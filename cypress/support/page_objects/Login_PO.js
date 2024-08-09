/// <reference types="cypress" />

import Base_PO from "./Base_PO";

class Login_PO extends Base_PO {
  navigateTo_Login_Page() {
    super.navigate("");
  }
}
export default Login_PO;