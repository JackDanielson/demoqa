const { should } = require('chai');
const PracticeFormPage = require('../../../pages/forms/PracticeFormPage'); 

describe('Testing Practice Form', () => {

    beforeEach(() => {
        cy.visit('/automation-practice-form')
    });

        it('Full Form filled - ', () => {
        cy.fixture('dataPracticeForm.json').as('data')

        cy.get('@data').then((data) => {
            const user = data.fullUser

            PracticeFormPage.typeText(PracticeFormPage.getTxtFirstName(), user.firstName)
            PracticeFormPage.typeText(PracticeFormPage.getTxtLastName(), user.lastName)
            PracticeFormPage.typeText(PracticeFormPage.getTxtUserEmail(), user.email)
            PracticeFormPage.checkRadio(PracticeFormPage.getRadioGenderMale())
            PracticeFormPage.typeText(PracticeFormPage.getTxtMobileNumber(), user.cellphone)
            PracticeFormPage.selectDate(user.dob)
            PracticeFormPage.typeSubjects(user.subjects)
            if (user.hobbiesSports) PracticeFormPage.checkHobby(PracticeFormPage.getCheckHobbiesSports())
            if (user.hobbiesReading) PracticeFormPage.checkHobby(PracticeFormPage.getCheckHobbiesReading())
            if (user.hobbiesMusic) PracticeFormPage.checkHobby(PracticeFormPage.getCheckHobbiesMusic())
            if (user.picture) PracticeFormPage.uploadFile(user.picture)
            PracticeFormPage.typeText(PracticeFormPage.getTxtCurrentAddress(), user.currentAddress)
            PracticeFormPage.selectState(user.state)
            PracticeFormPage.selectCity(user.city)

            PracticeFormPage.submitForm()

            PracticeFormPage.getModalTitle().should('have.text', 'Thanks for submitting the form')

            PracticeFormPage.getModalTableRows()
                .eq(0).should('contain.text', 'Student Name').and('contain.text', `${user.firstName} ${user.lastName}`)
                .parent().parent().eq(1).should('contain.text', 'Student Email').and('contain.text', user.email)
                .parent().parent().eq(2).should('contain.text', 'Gender').and('contain.text', user.gender)
                .parent().parent().eq(3).should('contain.text', 'Mobile').and('contain.text', user.cellphone)
                .parent().parent().eq(4).should('contain.text', 'Date of Birth').and('contain.text', user.dob.replace(/\//g, ' '))
                .parent().parent().eq(5).should('contain.text', 'Subjects').and('contain.text', user.subjects)
                .parent().parent().eq(6).should('contain.text', 'Hobbies').and('contain.text', 'Sports').and('contain.text', 'Reading')
                .parent().parent().eq(7).should('contain.text', 'Picture').and('contain.text', user.picture ? user.picture.split('/').pop() : '')
                .parent().parent().eq(8).should('contain.text', 'Address').and('contain.text', user.currentAddress)
                .parent().parent().eq(9).should('contain.text', 'State and City').and('contain.text', user.state).and('contain.text', user.city)
        })
    });
});