class PracticeFormPage {

    // Solo getters — devuelven cy.get() directamente
    getTxtFirstName() {
        return cy.get('#firstName')
    }
    getTxtLastName() {
        return cy.get('#lastName')
    }
    getTxtUserEmail() {
        return cy.get('#userEmail')
    }

    getRadioGenderMale() {
        return cy.get('#gender-radio-1')
    }
    getRadioGenderFemale() {
        return cy.get('#gender-radio-2')
    }
    getRadioGenderOther() {
        return cy.get('#gender-radio-3')
    }

    getTxtMobileNumber() {
        return cy.get('#userNumber')
    }
    getCalDateOfBirth() {
        return cy.get('#dateOfBirthInput')
    }
    getTxtSubjects() {
        return cy.get('#subjectsInput')
    }

    getCheckHobbiesSports() {
        return cy.get('#hobbies-checkbox-1')
    }
    getCheckHobbiesReading() {
        return cy.get('#hobbies-checkbox-2')
    }
    getCheckHobbiesMusic() {
        return cy.get('#hobbies-checkbox-3')
    }

    getBtnChooseFile() {
        return cy.get('#uploadPicture')
    }
    getTxtCurrentAddress() {
        return cy.get('#currentAddress')
    }

    getComboState() {
        return cy.get('#state')
    }
    getComboCity() {
        return cy.get('#city')
    }

    getBtnSubmit() {
        return cy.get('#submit')
    }

    getModalTitle() {
        return cy.get('.modal-title')
    }
    getModalTableRows() {
        return cy.get('.table-responsive table tbody tr')
    }
}

module.exports = new PracticeFormPage()