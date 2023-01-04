function modalTest() {
  cy.visit("http://localhost:3000");
  //Check that modal is not loaded on page load
  cy.get(`[data-test-id="modal"]`).should("not.exist");
  //Click on menu icon
  cy.get(`[data-test-id="menuIcon"]`).click();
  //Check that modal is loaded
  cy.get(`[data-test-id="modal"]`).should("exist");
  //Click on close icon
  cy.get(`[data-test-id="closeIcon"]`).click();
}
describe("Test Modal's Opening and Closing", () => {
  it("iphone SE modal", () => {
    cy.viewport(320, 568);
    modalTest();
  });
  it("iPhone 8 modal", () => {
    cy.viewport(375, 667);
    modalTest();
  });
  it("iPhone 8 Plus modal", () => {
    cy.viewport(414, 736);
    modalTest();
  });
  it("iPad Mini modal", () => {
    cy.viewport(768, 1024);
    modalTest();
  });
  it("iPad Pro modal", () => {
    cy.viewport(1024, 1366);
    modalTest();
  });
});
