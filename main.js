class SplitBill {
    constructor() {
        this.bill = document.querySelector(".bill-input").value;
        this.numberOfPeople = document.querySelector(".people-input").value;
        this.resultTip = document.querySelector("#displayTipPerP").value;
        this.resultTotal = document.querySelector("#displayTotalPerP").value;
        this.tipPerPerson = this.tipPerPerson.bind(this);
        this.tipTotal = this.tipTotal.bind(this);
        this.onTipClicked = this.onTipClicked.bind(this);
        this.selectedTip = this.selectedTip.bind(this);
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

    onTipClicked(tip) {
        this.tipPerPerson (tip);
        this.tipTotal (tip);
     }

    selectedTip () {
        document.getElementById("5_tip").onclick = function() {
            this.onTipClicked(0.05);
        };
        document.getElementById("10_tip").onclick = function() {
            this.onTipClicked(0.1);
        };
        document.getElementById("15_tip").onclick = function() {
            this.onTipClicked(0.15);
        };
        document.getElementById("20_tip").onclick = function() {
            this.onTipClicked(0.2);
        };
        document.getElementById("25_tip").onclick = function() {
            this.onTipClicked(0.25);
        };
        document.getElementById("50_tip").onclick = function() {
            this.onTipClicked(0.5);
        };
        // document.getElementById("5_tip").o(0.05) => { this.onTipClicked(0.5); };
        // document.getElementById("10_tip").o(0.1) => { this.onTipClicked(); };
        // document.getElementById("15_tip").o(0.15) => { this.onTipClicked(); };
        // document.getElementById("20_tip").o(0.2) => { this.onTipClicked(); };
        // document.getElementById("25_tip").o(0.25) => { this.onTipClicked(); };
        // document.getElementById("50_tip").o(0.5) => { this.onTipClicked() };
    }

    clear() {
        document.querySelector("bill-input").value = ""
        document.querySelector("people-input").value = ""
    }
}

const bill = new SplitBill()
bill.selectedTip()