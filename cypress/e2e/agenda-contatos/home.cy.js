/// <reference types="cypress" />

describe('Agenda de Contatos - Testes E2E', () => {
  
    beforeEach(() => {
       
      cy.visit('https://agenda-contatos-react.vercel.app/');
    });
  
    it('Deve incluir um novo contato', () => {
      cy.get('input[placeholder="Nome"]').type('Teste Cypress');
      cy.get('input[placeholder="Telefone"]').type('11999999999');
      cy.get('input[placeholder="E-mail"]').type('cypress@teste.com');
      cy.get('.adicionar').click();
      cy.contains('Teste Cypress').should('exist');
    });
  
    it('Deve alterar um contato existente', () => {
        cy.get('.edit').first().click();
        cy.get('input[placeholder="Nome"]').clear().type('Cypress Alterado');
        cy.get('.alterar').click();
        cy.contains('Cypress Alterado').should('exist')
  
    });

    it('Deve remover um contato', () => {
        cy.get('.delete').first().click();
        cy.contains('Cypress Alterado').should('not.exist');
        });
  
  });