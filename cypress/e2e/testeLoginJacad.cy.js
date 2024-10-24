describe("Acessa JACAD - Aluno", () => {
  it("passes", () => {
    cy.visit("https://materdei.jacad.com.br/academico/aluno-v2/login");
    cy.get("#login").type("fernando");
    cy.get("#senha").type("123");
    cy.get("#btn-login").click();
  });
});
