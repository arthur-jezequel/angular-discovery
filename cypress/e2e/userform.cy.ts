describe('UserForm', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Client can change his profile user through the form page, and profile page is updated', () => {
        cy.get('a').contains('Change user').click();
        // Select userID in the Form page
        cy.get('form').get('#id_input').type("1");
        cy.get('form').get('#submit_button').click();
        // Check profile update
        cy.get('a').contains('Profile').click();
        cy.get('#name').contains("FLOPPA")
    })  
})