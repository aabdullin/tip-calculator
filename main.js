class SplitBill {
    constructor() {
        // DO NOT GET THE VALUE OF SELECTOR INSIDE THE CONSTRUCTOR
        // IT WILL ALWAYS BE BLANK
        // EX.  let numOfPeople = document.querySelector(".people-input").value;

        // DO GET THE HTML TAGS SO YOU CAN MANIPULATOR THEM IN THE FUTURE
        // EX.  this.resultTip = document.querySelector("#displayTipPerP");

        // DO BIND THE FUNCTIONS TO ENSURE THEY ALL GET THE RIGHT SCOPE WHEN THEY ARE CALLED
        // EX.  this.init = this.init.bind(this);
        this.resultTip = document.querySelector("#displayTipPerP");
        this.resultTotal = document.querySelector("#displayTotalPerP");
        this.getBill = this.getBill.bind(this);
        this.getNumberOfPeople = this.getNumberOfPeople.bind(this)
        this.tipPerPerson = this.tipPerPerson.bind(this);
        this.tipTotal = this.tipTotal.bind(this);
        this.onTipClicked = this.onTipClicked.bind(this);
        this.init = this.init.bind(this);

        // INIT CAN BE CALLED HERE TOO
        // this.init();
    }

    // DO USE GET METHODS WHEN GETTING A VALUE FROM AN HTML INPUT
    // EX. BELOW   
    getNumberOfPeople () {
        let numOfPeople = document.querySelector(".people-input").value;
        return Number(numOfPeople)
    }

    getBill () {
        let getBill = document.querySelector(".bill-input").value;
        return Number(getBill)
    }

    // DO USE SET METHODS WHEN SETTING A VALUE OF AN HTML INPUT
    // EX. BELOW
    setNumberOfPeople(value) {
        document.querySelector(".people-input").value = value
    }

    setBill(value) {
        document.querySelector(".bill-input").value = value
    }

    clear() {
        this.setNumberOfPeople("")
        this.setBill("")
        this.resultTip.innerHTML = ""
        this.resultTotal.innerHTML = ""
    }

    tipPerPerson (tip) {
        let tipPerP = (this.getBill() * tip) / this.getNumberOfPeople ()
        this.resultTip.innerHTML = tipPerP
    }

    tipTotal (tip) {
        let tipTotalPerP = ((this.getBill() * tip) / this.getNumberOfPeople ()) + (this.getBill() / this.getNumberOfPeople() )
        this.resultTotal.innerHTML = tipTotalPerP
    }

    onTipClicked(tip) {
        this.tipPerPerson (tip);
        this.tipTotal (tip);
     }

    // DO USE AN INIT METHOD TO BIND EVENTS TO EVENT HANDLERS
    // DO CALL THE INIT METHOD IMMEDIATELY AFTER THE CONSTRUCTOR
    //    OR DO CALL THE INIT METHOD INSIDE THE CONSTRUCTOR ITSELF
    init () {
        document.getElementById("5_tip").onclick = () => {
            this.onTipClicked(0.05);
        };
        document.getElementById("10_tip").onclick = () => {
            this.onTipClicked(0.1);
        };
        document.getElementById("15_tip").onclick = () => {
            this.onTipClicked(0.15);
        };
        document.getElementById("25_tip").onclick = () => {
            this.onTipClicked(0.25);
        };
        document.getElementById("50_tip").onclick = () => {
            this.onTipClicked(0.5);
        };
        document.getElementById("reset_button").onclick = () => {
            this.clear()
        };
        // document.getElementById("5_tip").o(0.05) = () => { this.onTipClicked(0.5); };
        // document.getElementById("10_tip").o(0.1) = () => { this.onTipClicked(); };
        // document.getElementById("15_tip").o(0.15) = () => { this.onTipClicked(); };
        // document.getElementById("20_tip").o(0.2) = () => { this.onTipClicked(); };
        // document.getElementById("25_tip").o(0.25) = () => { this.onTipClicked(); };
        // document.getElementById("50_tip").o(0.5) = () => { this.onTipClicked() };
    }


}

const bill = new SplitBill()
bill.init()


