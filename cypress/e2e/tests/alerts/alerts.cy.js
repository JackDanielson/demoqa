const { should } = require('chai');
const AlertsPage = require('../../../pages/AlertsPage');

describe('Testing Alerts', () => {

    beforeEach(() => {
        cy.visit('/alerts')
    });

    it('Simple Alert - Click button and accept alert', () => {
        AlertsPage.click(AlertsPage.getBtnAlert())
        AlertsPage.acceptAlert()
    });

    it('Timer Alert - Wait 5 seconds and accept alert', () => {
        AlertsPage.click(AlertsPage.getBtnTimerAlert())
        cy.on('window:alert', (text) => {
            expect(text).to.eq('This alert appeared after 5 seconds')
        })
    });

    it('Confirm Alert - Click OK and verify result text', () => {
        AlertsPage.click(AlertsPage.getBtnConfirmAlert())
        AlertsPage.acceptConfirm()
        AlertsPage.getTxtConfirmResult()
            .should('be.visible')
            .and('have.text', 'You selected Ok')
    });

    it('Confirm Alert - Click Cancel and verify result text', () => {
        AlertsPage.click(AlertsPage.getBtnConfirmAlert())
        AlertsPage.dismissConfirm()
        AlertsPage.getTxtConfirmResult()
            .should('be.visible')
            .and('have.text', 'You selected Cancel')
    });

    it('Prompt Alert - Enter name and verify result text', () => {
        const name = 'Federico Danielo'
        AlertsPage.enterPromptText(name)
        AlertsPage.click(AlertsPage.getBtnPromptAlert())
        AlertsPage.getTxtPromptResult()
            .should('be.visible')
            .and('have.text', `You entered ${name}`)
    });

    it('Prompt Alert - Cancel prompt and verify no result', () => {
        AlertsPage.enterPromptText(null)
        AlertsPage.click(AlertsPage.getBtnPromptAlert())
        AlertsPage.getTxtPromptResult()
            .should('be.visible')
            .and('have.text', 'You entered null')
    });
});