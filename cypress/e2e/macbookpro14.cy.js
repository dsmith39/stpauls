describe("MacBook Pro 14", () => {
  it("Visits Macbook Pro 14 inch Index Page", () => {
    cy.viewport(1512, 982);
    cy.visit("http://localhost:3000");
  });
});
