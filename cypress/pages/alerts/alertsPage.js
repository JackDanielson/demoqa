class AlertPage {

    getBtnAlert(){
        return cy.get('#alertButton')
    }

    getBtnTimerAlert(){
        return cy.get('#timerAlertButton')
    }

    getBtnConfirmAlert(){
        return cy.get('#confirmButton')
    }

    getBtnPropmtAlert(){
        return cy.get('#promptButton')
    }

}