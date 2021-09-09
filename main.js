class SplitBill {
    constructor() {
        this.bill = document.querySelector(".bill-input").value;
        this.numberOfPeople = document.querySelector(".people-input").value;
        this.resultTip = document.querySelector("#displayTipPerP").value;
        this.resultTotal = document.querySelector("#displayTotalPerP").value;
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
        document.getElementById("20_tip").onclick = function() {
            tipPerPerson (0.20); 
            tipTotal (0.20)           
        };
        document.getElementById("25_tip").onclick = function() {
            tipPerPerson (0.25); 
            tipTotal (0.25)           
        };
        document.getElementById("50_tip").onclick = function() {
            tipPerPerson (0.50); 
            tipTotal (0.50)           
        };
    }

    numberOfPeople () {
        let numOfPeople = document.querySelector(".people-input").value;
        return numOfPeople
    }

    tipPerPerson (tip) {
        let tipPerP = (this.bill * tip) / numberOfPeople ()
        resultTip.innerHTML = tipPerP
    }

    tipTotal (tip) {
        let tipTotalPerP = ((this.bill * tip) / numberOfPeople ()) + (this.bill / this.numberOfPeople() )
        resultTotal.innerHTML = tipTotalPerP
    }

    clear() {
        document.querySelector("bill-input").value = ""
        document.querySelector("people-input").value = ""
    }
}

const bill = new SplitBill()