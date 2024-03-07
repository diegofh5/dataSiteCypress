import FindNearestStorage from "../e2e/pageObjects/findNearestStorageObjects"
const fns = new FindNearestStorage()

Cypress.Commands.add("valideStorageTypeOption", () => {
  fns.storageTypeOption().should('be.visible')
})

Cypress.Commands.add("fillInputLocation", (zipCode) => {
  fns.inputLocation().type(zipCode)
})

Cypress.Commands.add("selectDropDownUnitSizeOption", (option) => {
  fns.dropDownUnitSize().click()
  fns.dropDownUnitSizeOption(option).click()
})

Cypress.Commands.add("clickButtonFindStorage", () => {
    fns.buttonFindStorage().click()
})

Cypress.Commands.add("validateInputLocation", (zipCode) => {
  fns.inputLocation().should('contain.value', zipCode)
})

Cypress.Commands.add("validateUnitSizeSelection", (unitSize) => {
  fns.unitSizeSelection(unitSize).invoke('attr', 'checked').should('eq', 'checked')
})

Cypress.Commands.add("validateRentNowCheckInTypeSelection", () => {
    fns.rentNowCheckInTypeSelection().invoke('attr', 'checked').should('eq', 'checked')
})

Cypress.Commands.add("validateRequireLocationMessage", () => {
    fns.requireLocationMessage().should('be.visible')
})