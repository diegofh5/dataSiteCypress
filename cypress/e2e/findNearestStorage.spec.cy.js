
beforeEach(function(){
  cy.viewport('macbook-11')
  cy.visit('/')
})

describe('Find Nearest Storage Facility Search Bar Tests', () => {
  it('Search by location, unit and type', () => {
    let menu = 'Storage'
    let sub_menu = 'Move-In Online Today!'
    let zipCode = '33195'
    let selectDropDownUnitSizeOption = 'Small (Storage Locker, 5x5, 5x10)'
    let unitSize = 'Small'
    cy.clickOnStorageTopMenuOption(menu, sub_menu)
    cy.valideStorageTypeOption()
    cy.fillInputLocation(zipCode)
    cy.selectDropDownUnitSizeOption(selectDropDownUnitSizeOption)
    cy.clickButtonFindStorage()
    cy.validateInputLocation(zipCode)
    cy.validateUnitSizeSelection(unitSize)
    cy.validateRentNowCheckInTypeSelection()
  })

  it('Input location is required', () => {
    cy.clickButtonFindStorage()
    cy.validateRequireLocationMessage()
  })
})


