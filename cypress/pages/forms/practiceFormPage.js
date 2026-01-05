class PracticeFormPage {

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
        return cy.get('#dateOfBirthInput') 
    }

    getTxtSubjects(){
        return cy.get('#subjectsInput')
    }

    getCheckHobbiesSports(){
        return cy.get('#hobbies-checkbox-1')
    }

    getCheckHobbiesReading(){
        return cy.get('#hobbies-checkbox-2')
    }

    getCheckHobbiesMusic(){
        return cy.get('#hobbies-checkbox-3')
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

    getBtnSubmit(){
        return cy.get('#submit')
    }

   getModalTitle(){
        return cy.get('.modal-title')
    }

    getModalTableRows(){
        return cy.get('.table-responsive table tbody tr')
    }

    checkRadio(radio) {
        radio.click({ force: true })
    }

    checkHobby(checkbox) {
        checkbox.click({ force: true })
    }

    selectDate(dob) {
        const [day, month, year] = dob.split('/')
        this.getCalDateOfBirth().click()
        cy.get('.react-datepicker__month-select').select(parseInt(month) - 1)
        cy.get('.react-datepicker__year-select').select(year)
        cy.get(`.react-datepicker__day--0${parseInt(day)}:not(.react-datepicker__day--outside-month)`).click()
    }


}

module.exports = new PracticeFormPage()