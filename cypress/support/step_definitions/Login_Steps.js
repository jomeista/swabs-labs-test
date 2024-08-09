/// <reference types="cypress" />
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Login_PO from "../page_objects/Login_PO";

const loginPage = new Login_PO;

Given(`I navigate to the Swab Labs login page`, () =>{
  loginPage.navigateTo_Login_Page();
})

When(`I type a valid username {word}`, (username) =>{
  loginPage.type_Username(username);
})

When(`I type a valid password {word}`, (password) =>{
loginPage.type_Password(password);
})

When(`I click on login button`, () =>{
  loginPage.clickOn_Login_Button();
})

