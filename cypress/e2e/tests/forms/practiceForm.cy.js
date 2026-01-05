const { should } = require('chai');
const PracticeFormPage = require('../../../pages/elements/TextBoxPage');

describe('Testing Practice Form', () =>{

    beforeEach(() => {
        cy.visit('/automation-practice-form')
    });

    it('Full Form is filled', () =>{
        cy.fixture('../../../fixtures/dataPracticeForm.json').as('user')
        PracticeFormPage.get


    });

});