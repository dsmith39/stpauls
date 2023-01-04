describe("iPad Mini", () => {
  it("Visits iPad Mini Index Page", () => {
    cy.viewport(768, 1024);
    cy.visit("http://localhost:3000");
  });
});
describe("Test Modal's Opening and Closing", () => {
  it("Opens and Closes The Modal", () => {
    cy.viewport(768, 1024);
    cy.visit("http://localhost:3000");
    //Check that modal is not loaded on page load
    cy.get(`[data-test-id="modal"]`).should("not.exist");
    //Click on menu icon
    cy.get(`[data-test-id="menuIcon"]`).click();
    //Check that modal is loaded
    cy.get(`[data-test-id="modal"]`).should("exist");
    //Click on close icon
    cy.get(`[data-test-id="closeIcon"]`).click();
  });
});
