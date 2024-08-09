/// <reference types="cypress" />

class Base_PO {
  // navigate(path){
  //   cy.fixture("config.json").then((data) =>{
  //     cy.visit(data.baseUrL + path)
  //   })
  // }

  baseUrl= "https://www.saucedemo.com/"

  navigate(){
    cy.visit(this.baseUrl)
  }

    
}
export default Base_PO;