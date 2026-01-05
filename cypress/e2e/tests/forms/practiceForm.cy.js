const { should } = require('chai');
const PracticeFormPage = require('../../../pages/forms/PracticeFormPage');

describe('Testing Practice Form', () => {

    beforeEach(() => {
        cy.visit('/automation-practice-form')
    });

    it('Full Form is filled with all data and modal shows everything correctly', () => {
        cy.fixture('dataPracticeForm.json').as('data')

        cy.get('@data').then((data) => {
            const user = data.fullUser

            if (user.firstName) PracticeFormPage.getTxtFirstName().type(user.firstName)
            if (user.lastName) PracticeFormPage.getTxtLastName().type(user.lastName)
            if (user.email) PracticeFormPage.getTxtUserEmail().type(user.email)

            PracticeFormPage.getRadioGenderMale().click({ force: true })

            if (user.cellphone) PracticeFormPage.getTxtMobileNumber().type(user.cellphone)

            PracticeFormPage.getCalDateOfBirth().click()
            cy.get('.react-datepicker__month-select').select('April')
            cy.get('.react-datepicker__year-select').select('1980')
            cy.get('.react-datepicker__day--005:not(.react-datepicker__day--outside-month)').click()

            PracticeFormPage.getTxtSubjects().type(user.subjects + '{enter}')


            if (user.hobbiesSports) PracticeFormPage.getCheckHobbiesSports().click({ force: true })
            if (user.hobbiesReading) PracticeFormPage.getCheckHobbiesReading().click({ force: true })
            if (user.hobbiesMusic) PracticeFormPage.getCheckHobbiesMusic().click({ force: true })

            if (user.picture) {
                PracticeFormPage.getBtnChooseFile().selectFile(user.picture, { force: true })
            }

            if (user.currentAddress) PracticeFormPage.getTxtCurrentAddress().type(user.currentAddress)

            PracticeFormPage.getBtnSubmit().click({ force: true })

            PracticeFormPage.getModalTitle()
                .should('have.text', 'Thanks for submitting the form')

            PracticeFormPage.getModalTableRows()
                .eq(0).should('contain.text', 'Student Name').and('contain.text', `${user.firstName} ${user.lastName}`)
                .parent().parent().eq(1).should('contain.text', 'Student Email').and('contain.text', user.email)
                .parent().parent().eq(2).should('contain.text', 'Gender').and('contain.text', 'Male')
                .parent().parent().eq(3).should('contain.text', 'Mobile').and('contain.text', user.cellphone)
                .parent().parent().eq(4).should('contain.text', 'Date of Birth').and('contain.text', '05 May,1980')
                .parent().parent().eq(6).should('contain.text', 'Hobbies').and('contain.text', 'Sports').and('contain.text', 'Reading')
                .parent().parent().eq(8).should('contain.text', 'Address').and('contain.text', user.currentAddress)
                .parent().parent().eq(9).should('contain.text', 'State and City').and('contain.text', 'NCR').and('contain.text', 'Delhi')
        })
    });

    it('Minimum required fields filled - form submits successfully', () => {
        cy.fixture('dataPracticeForm.json').as('data')

        cy.get('@data').then((data) => {
            const user = data.enoughDataUser

            PracticeFormPage.typeText(PracticeFormPage.getTxtFirstName(), user.firstName)
            PracticeFormPage.typeText(PracticeFormPage.getTxtLastName(), user.lastName)
            PracticeFormPage.checkRadio(PracticeFormPage.getRadioGenderFemale())
            PracticeFormPage.typeText(PracticeFormPage.getTxtMobileNumber(), user.cellphone)

            PracticeFormPage.submitForm()
            PracticeFormPage.getModalTitle().should('have.text', 'Thanks for submitting the form')
            PracticeFormPage.getModalTableRows()
                .eq(0).should('contain.text', 'Student Name').and('contain.text', `${user.firstName} ${user.lastName}`)
                .parent().parent().eq(2).should('contain.text', 'Gender').and('contain.text', 'Female')
                .parent().parent().eq(3).should('contain.text', 'Mobile').and('contain.text', user.cellphone)
        })
    });

    it('Required fields validation - submit without data shows errors', () => {
        PracticeFormPage.submitForm()
        PracticeFormPage.getTxtFirstName().should('have.css', 'border-color', 'rgb(220, 53, 69)')
        PracticeFormPage.getTxtLastName().should('have.css', 'border-color', 'rgb(220, 53, 69)')
        PracticeFormPage.getTxtMobileNumber().should('have.css', 'border-color', 'rgb(220, 53, 69)')
        PracticeFormPage.getModalTitle().should('not.exist')
    });
});