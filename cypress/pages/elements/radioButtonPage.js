class RadioButtonPage {

    getYesRadio() {
        return cy.get('#yesRadio')
    }

    getImpressiveRadio() {
        return cy.get('#impressiveRadio')
    }

    getNoRadio() {
        return cy.get('#noRadio')
    }

    getTxtResultRadio() {
        return cy.get('#mt-3')
    }

    getTextResult(){
        return cy.get('.mt-3')
    }

    checkRadio(radio) {
        radio.click({ force: true });
    }

}

module.exports = new RadioButtonPage()