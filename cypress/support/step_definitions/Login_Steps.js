/// <reference types="cypress" />
import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import Login_PO from "../page_objects/Login_PO";

const loginPage = new Login_PO;

Given(`I navigate to the Swab Labs login page`, () =>{
  loginPage.navigateTo_Login_Page();
})

