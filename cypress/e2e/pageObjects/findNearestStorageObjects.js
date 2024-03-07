class FindNearestStorage {
 
    storageTypeOption(){
        return cy.get('#OnlineMoveIn_selection')
    }

    inputLocation(){
        return cy.get('#movingFromInput')
    }

    dropDownUnitSize(){
        return cy.get('#selectboxUnitSizeInput')
    }

    dropDownUnitSizeOption(option){
        return cy.get('label').contains(option)
    }
    
    buttonFindStorage(){
        return cy.get('button').contains(' Find Storage ')
    }
    
    unitSizeSelection(unitSize){
        return cy.get(`#${unitSize}`)
    }

    rentNowCheckInTypeSelection(){
        return cy.get('#optRentNow')
    }
    
    requireLocationMessage(){
        return cy.get('li').contains('Please enter your zip/postal code, city or address.')
    }

}

export default FindNearestStorage;