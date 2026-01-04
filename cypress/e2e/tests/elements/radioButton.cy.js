const { should } = require('chai');
const RadioButtonPage = require('../../../pages/elements/RadioButtonPage');

describe('Radio Button', () => {
    beforeEach(() => {
        cy.visit('/radio-button')
    });

    it('Radio Button Yes selected correctly', () => {
        RadioButtonPage.checkRadio(RadioButtonPage.getYesRadio());
        RadioButtonPage.getTextResult().should('be.visible').and('contain.text', 'Yes');
    });

    it('Radio Button Impressive selected correctly', () => {
        RadioButtonPage.checkRadio(RadioButtonPage.getImpressiveRadio());
        RadioButtonPage.getTextResult().should('be.visible').and('contain.text', 'Impressive');
    });

    it('Switching between Yes and Impressive works correctly', () => {
        RadioButtonPage.checkRadio(RadioButtonPage.getYesRadio());
        RadioButtonPage.getTextResult().should('be.visible').and('contain.text', 'Yes');
        RadioButtonPage.checkRadio(RadioButtonPage.getImpressiveRadio());
        RadioButtonPage.getTextResult().should('be.visible').and('contain.text', 'Impressive');
        RadioButtonPage.checkRadio(RadioButtonPage.getYesRadio());
        RadioButtonPage.getTextResult().should('be.visible').and('contain.text', 'Yes');
    });

    it('Clicking in No works correctly', () => {
        RadioButtonPage.checkRadio(RadioButtonPage.getNoRadio());
        RadioButtonPage.getTextResult().should('not.exist')
    });

});


