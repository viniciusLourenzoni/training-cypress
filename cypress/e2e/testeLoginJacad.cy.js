describe("Unimater - teste de acesso do sistema - Aluno", () => {
  it("Valida se o acesso ao painel de notas é possível", () => {
    cy.visit(Cypress.config().baseUrl + "/aluno-v2/login");
    cy.get("[id=login]").type(Cypress.env("usuario"));
    cy.get("[id=senha]").type(Cypress.env("senha"));
    cy.get("[id=btn-login]").click();
    cy.get(".sidenav-link").contains("Acadêmico").click();
    cy.get(".sidenav-link").contains("Notas").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/aluno-v2/notas/");
  });
});
