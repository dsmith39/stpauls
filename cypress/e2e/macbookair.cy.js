describe("MacBook Air", () => {
  it("Visits MacBook Air Index Page", () => {
    cy.viewport(1280, 832);
    cy.visit("http://localhost:3000");
  });
});
