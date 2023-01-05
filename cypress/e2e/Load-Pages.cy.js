function loadAllPages() {
  cy.visit("http://localhost:3000");
  cy.visit("http://localhost:3000/bulletin");
  cy.visit("http://localhost:3000/programs");
  cy.visit("http://localhost:3000/calendar");
  cy.visit("http://localhost:3000/events");
  cy.visit("http://localhost:3000/believe");
  cy.visit("http://localhost:3000/outreach");
  cy.visit("http://localhost:3000/pastor");
}

describe("Ensure All Page Load", () => {
  it("iPhone SE", () => {
    cy.viewport(320, 568);
    loadAllPages();
  });
  it("iPhone 8", () => {
    cy.viewport(375, 667);
    loadAllPages();
  });
  it("iPhone 8 Plus", () => {
    cy.viewport(414, 736);
    loadAllPages();
  });
  it("iPad Mini", () => {
    cy.viewport(768, 1024);
    loadAllPages();
  });
  it("iPad Pro", () => {
    cy.viewport(1024, 1366);
    loadAllPages();
  });
  it("Macbook Air", () => {
    cy.viewport(1280, 832);
    loadAllPages();
  });
  it("Macbook Pro 14", () => {
    cy.viewport(1512, 982);
    loadAllPages();
  });
  it("Macbook Pro 16", () => {
    cy.viewport(1728, 1117);
    loadAllPages();
  });
});
