import React from "react";
import Header from "./index";

describe("Load Index Page", () => {
  it("Visits Index Page", () => {
    cy.visit("http://localhost:3000");
  });
});

describe("<Header />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Header />);
  });
});
