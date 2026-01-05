class PracticeFormPage{

    getTxtFirstName(){
        return cy.get('#firstName')
    }

    getTxtLastName(){
        return cy.get('#lastName')
    }

    getTxtUserEmail(){
        return cy.get('#userEmail')
    }

    getRadioGenderMale(){
        return cy.get('#gender-radio-1')
    }

    getRadioGenderFemale(){
        return cy.get('#gender-radio-2')
    }

    getRadioGenderOther(){
        return cy.get('#gender-radio-3')
    }

    getTxtMobileNumber(){
        return cy.get('#userNumber')
    }

    getCalDateOfBirth(){
        return cy.get('#dateOfInputBirth')
    }

    getTxtSubjects(){
        return cy.get('#subjectsInput')
    }

    getCheckHobbiesSport(){
        return cy.get('#hobbies-checkbox-1')
    }

    getCheckHobbiesReading(){
        return cy.get('#hobbies-checkbox-2')
    }

    getCheckHobbiesMusic(){
        return cy.get('#hobbies-checkbox-3')
    }

    getTxtFileChosen(){
        return cy.get('#form-file-label')
    }

    getBtnChooseFile(){
        return cy.get('#uploadPicture')
    }

    getTxtCurrentAddress(){
        return cy.get('#currentAddress')
    }

    getComboState(){
        return cy.get('#state')
    }

    getComboCity(){
        return cy.get('#city')
    }

    checkRadio(radio) {
        radio.click({ force: true });
    }

}

module.exports = new PracticeFormPage()