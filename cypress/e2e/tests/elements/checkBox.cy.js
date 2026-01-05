const { should } = require('chai');
const CheckBoxPage = require('../../../pages/elements/CheckBoxPage');

describe('Testing Check Box', () => {

    beforeEach(() => {
        cy.visit('/checkbox')
    });

    it('Root Ticked, all Selected', () => {
        CheckBoxPage.click(CheckBoxPage.getCheckHome())
        CheckBoxPage.getTxtSelectedChecks().should('contains.text', 'home').
            and('contains.text', 'desktop').and('contains.text', 'notes').and('contains.text', 'commands').and('contains.text', 'commands').
            and('contains.text', 'documents').and('contains.text', 'workspace').and('contains.text', 'react').and('contains.text', 'angular').
            and('contains.text', 'veu').and('contains.text', 'office').and('contains.text', 'public').and('contains.text', 'angular')
            .and('contains.text', 'private').and('contains.text', 'veu').and('contains.text', 'classified').and('contains.text', 'general').and('contains.text', 'downloads').and('contains.text', 'wordFile').and('contains.text', 'excelFile')
        CheckBoxPage.click(CheckBoxPage.getBtnMore())
        CheckBoxPage.getCheckHome().should('be.checked')
        CheckBoxPage.getCheckDesktop().should('be.checked')
        CheckBoxPage.getCheckNotes().should('be.checked')
        CheckBoxPage.getCheckCommands().should('be.checked')
        CheckBoxPage.getCheckDocuments().should('be.checked')
        CheckBoxPage.getCheckWorkspace().should('be.checked')
        CheckBoxPage.getCheckReact().should('be.checked')
        CheckBoxPage.getCheckAngular().should('be.checked')
        CheckBoxPage.getCheckVeu().should('be.checked')
        CheckBoxPage.getCheckOffice().should('be.checked')
        CheckBoxPage.getCheckPublic().should('be.checked')
        CheckBoxPage.getCheckPrivate().should('be.checked')
        CheckBoxPage.getCheckClassified().should('be.checked')
        CheckBoxPage.getCheckGeneral().should('be.checked')
        CheckBoxPage.getCheckDownloads().should('be.checked')
        CheckBoxPage.getCheckWord().should('be.checked')
        CheckBoxPage.getCheckExcel().should('be.checked')

    });

    it('Root Ticked, all Selected, then Home unticked, nothing Selected', () => {
        CheckBoxPage.click(CheckBoxPage.getCheckHome())
        CheckBoxPage.click(CheckBoxPage.getCheckHome())
        CheckBoxPage.getTxtSelectedChecks().should('not.exist');
        CheckBoxPage.click(CheckBoxPage.getBtnMore())
        CheckBoxPage.getCheckHome().should('not.be.checked')
        CheckBoxPage.getCheckDesktop().should('not.be.checked')
        CheckBoxPage.getCheckNotes().should('not.be.checked')
        CheckBoxPage.getCheckCommands().should('not.be.checked')
        CheckBoxPage.getCheckDocuments().should('not.be.checked')
        CheckBoxPage.getCheckWorkspace().should('not.be.checked')
        CheckBoxPage.getCheckReact().should('not.be.checked')
        CheckBoxPage.getCheckAngular().should('not.be.checked')
        CheckBoxPage.getCheckVeu().should('not.be.checked')
        CheckBoxPage.getCheckOffice().should('not.be.checked')
        CheckBoxPage.getCheckPublic().should('not.be.checked')
        CheckBoxPage.getCheckPrivate().should('not.be.checked')
        CheckBoxPage.getCheckClassified().should('not.be.checked')
        CheckBoxPage.getCheckGeneral().should('not.be.checked')
        CheckBoxPage.getCheckDownloads().should('not.be.checked')
        CheckBoxPage.getCheckWord().should('not.be.checked')
        CheckBoxPage.getCheckExcel().should('not.be.checked')
    });

    it('Subroot Ticked, root and all its subitems Selected', () => {
        CheckBoxPage.click(CheckBoxPage.getBtnMore())
        CheckBoxPage.click(CheckBoxPage.getCheckDocuments())
        CheckBoxPage.getTxtSelectedChecks().should('contains.text', 'home').
            and('contains.text', 'documents').and('contains.text', 'workspace').and('contains.text', 'react').and('contains.text', 'angular').
            and('contains.text', 'veu').and('contains.text', 'office').and('contains.text', 'public').and('contains.text', 'angular')
            .and('contains.text', 'private').and('contains.text', 'veu').and('contains.text', 'classified').and('contains.text', 'general')
        CheckBoxPage.getCheckHome().should('have.prop', 'indeterminate', true)
        CheckBoxPage.getCheckDocuments().should('be.checked')
        CheckBoxPage.getCheckWorkspace().should('be.checked')
        CheckBoxPage.getCheckReact().should('be.checked')
        CheckBoxPage.getCheckAngular().should('be.checked')
        CheckBoxPage.getCheckVeu().should('be.checked')
        CheckBoxPage.getCheckOffice().should('be.checked')
        CheckBoxPage.getCheckPublic().should('be.checked')
        CheckBoxPage.getCheckPrivate().should('be.checked')
        CheckBoxPage.getCheckClassified().should('be.checked')
        CheckBoxPage.getCheckGeneral().should('be.checked')
    });

    it('Specific Item ticked, all of its root items Selected', () => {
        CheckBoxPage.click(CheckBoxPage.getBtnMore())
        CheckBoxPage.click(CheckBoxPage.getCheckWord())
        CheckBoxPage.getTxtSelectedChecks().should('contains.text', 'downloads').and('contains.text', 'wordFile').and('contains.text', 'excelFile')
        CheckBoxPage.getCheckHome().should('have.prop', 'indeterminate', true)
        CheckBoxPage.getCheckDownloads().should('have.prop', 'indeterminate', true)
        CheckBoxPage.getCheckWord().should('be.checked')
    });

});
