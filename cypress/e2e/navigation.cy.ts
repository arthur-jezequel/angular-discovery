describe('Navigation', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Can navigate to the different pages with the navbar', () => {
        cy.get('a').contains('Profile').click()
    })  
})
