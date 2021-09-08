class SplitBill {
    constructor() {
        this.bill = document.querySelector(".bill-input").value;
        this.numberOfPeople = document.querySelector(".people-input").value;
    }

    selectedTip () {
        document.getElementById("5_tip").onclick = function() {
            tipPerPerson (0.05);
            tipTotal (0.05)      
        };
        document.getElementById("10_tip").onclick = function() {
            tipPerPerson (0.1);  
            tipTotal (0.1)          
        };
        document.getElementById("15_tip").onclick = function() {
            tipPerPerson (0.15); 
            tipTotal (0.15)           
        };
        return 

    }

    tipPerPerson (tip) {
        return this.bill * this.selectTip() * tip
    }


    tipTotal (tip) {
        return tipPerPerson() * this.numberOfPeople * tip
    }

    reset() {
        document.querySelector("bill-input").value = ""
        document.querySelector("people-input").value = ""
    }

    displayTipAmount() {

    }


}