import { When } from "cypress-cucumber-preprocessor/steps";

When("I complete {string}", (title) => {
    cy.get(".todo-list li .view label").contains(title).parent().find(".toggle").click();
});