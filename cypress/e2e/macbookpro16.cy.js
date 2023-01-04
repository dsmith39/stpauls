describe("MacBook Pro 16", () => {
  it("Visits Macbook Pro 16 inch Index Page", () => {
    cy.viewport(1728, 1117);
    cy.visit("http://localhost:3000");
  });
});
