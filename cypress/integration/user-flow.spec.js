/// <reference types="cypress" />

import shoppingItems from "../../src/components/shared/shoppingItems";

describe("user flow", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("test user flow", () => {
    // Home page
    cy.get(".home").should("exist");
    cy.get("#shop-link").should("exist");
    cy.get("#shop-link").click();

    //Shop page
    cy.get("h1").should("have.text", "This is shop page");
    cy.get(".card").should("have.length", shoppingItems.length);
    cy.get(".add-item").first().click();
    cy.get(".alert Button").first().click();
    cy.get(".add-item").last().click();
    cy.get(".alert Button").last().click();

    //Login page
    cy.get("h1").should("have.text", "Log in to shop!");
    cy.get("Button").click();
    cy.get("p").should("have.text", "Please enter valid email and password");
    cy.get("#email").type("test");
    cy.get("#password").type("test password");
    cy.get("Button").click();

    // Again Home page
    cy.get(".home").should("exist");
  });
});
