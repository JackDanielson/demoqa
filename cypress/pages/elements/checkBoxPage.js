class CheckBoxPage{

    getCheckHome(){
        return cy.get('#tree-node-home')
    }

    getCheckDesktop(){
        return cy.get('#tree-node-desktop')
    }

    getCheckNotes(){
        return cy.get('#tree-node-notes')
    }

    getCheckCommands(){
        return cy.get('#tree-node-commands')
    }

    getCheckDocuments(){
        return cy.get('#tree-node-documents')
    }

    getCheckWorkspace(){
        return cy.get('#tree-node-workspace')
    }

    getCheckReact(){
        return cy.get('#tree-node-react')
    }

    getCheckAngular(){
        return cy.get('#tree-node-angular')
    }

    getCheckVeu(){
        return cy.get('#tree-node-veu')
    }

    getCheckOffice(){
        return cy.get('#tree-node-office')
    }

    getCheckPublic(){
        return cy.get('#tree-node-public')
    }

    getCheckPrivate(){
        return cy.get('#tree-node-private')
    }

    getCheckClassified(){
        return cy.get('#tree-node-classified')
    }

    getCheckGeneral(){
        return cy.get('#tree-node-general')
    }

    getCheckDownloads(){
        return cy.get('#tree-node-downloads')
    }

    getCheckWord(){
        return cy.get('#tree-node-wordFile')
    }

    getCheckExcel(){
        return cy.get('#tree-node-excelFile')
    }

    getTxtSelectedChecks(){
        return cy.get('#result')
    }

    getBtnMore(){
        return cy.get('.rct-option-expand-all')
    }

    click(check){
        check.click({force: true})
    }

}

module.exports = new CheckBoxPage()