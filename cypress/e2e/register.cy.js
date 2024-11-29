import { errorMessages } from "../../src/components/Register"

describe('register page ', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')

  })
  describe('error messages ', () => {
    it('name input throws error fot 2 chars', () => {
      //arange
      
      //act

      cy.get('[data-cy= "ad-input"]').type("hu")
      //assert
      cy.contains(errorMessages.ad)
      
    });

    it('surname input throws error for 2 chars', () => {
      //arange

      //act

      cy.get('[data-cy= "soyad-input"]').type("ha")
      //assert
      cy.contains(errorMessages.soyad)
      
    })

    it('email input throws error for emre@wit.', () => {
      //arange
   
      //act

      cy.get('[data-cy= "email-input"]').type("emre@wit.")
      //assert
      cy.contains(errorMessages.email)
      
    })

    it('password input throws error for 1234', () => {
      //arange

      //act

      cy.get('[data-cy= "password-input"]').type("1234")
      //assert
      cy.contains(errorMessages.password)
      
    })

    it('button is disabled for unvalidated inputs', () => {
      //arange

      //act

      cy.get('[data-cy= "password-input"]').type("1234")
      //assert
      cy.get('[data-cy= "button-input"]').should('be.disabled');
      
    })
  })

  describe('form input validated  ', () => {
    it('button enabled for validated inputs', () => {
      //arange

      //act

      cy.get('[data-cy= "ad-input"]').type("emre")
      cy.get('[data-cy= "soyad-input"]').type("sahiner")
      cy.get('[data-cy= "email-input"]').type("emre@wit.com.tr")
      cy.get('[data-cy= "password-input"]').type("1234Aa@nn")
      //assert
      cy.get('[data-cy= "button-input"]').should('not.be.disabled');
      
    });

    it('submit form on validated inputs', () => {
      //arange

      //act

      cy.get('[data-cy= "ad-input"]').type("emre")
      cy.get('[data-cy= "soyad-input"]').type("sahiner")
      cy.get('[data-cy= "email-input"]').type("emre@wit.com.tr")
      cy.get('[data-cy= "password-input"]').type("1234Aa@nn")
      cy.get('[data-cy= "button-input"]').click()
      //assert
      cy.get('[data-cy= "response-message"]').should('be.visible');
      
    });
  })
})