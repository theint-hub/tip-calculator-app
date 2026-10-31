const bill = document.getElementById("price");
const selectTipBtn = document.querySelectorAll(".buttons button");
const numOfPeople = document.getElementById("numOfPeople");
const errorMessage = document.getElementById("input-error");
const customTip = document.getElementById("custom-tip");
const resultOne = document.getElementById("result-one");
const resultTwo = document.getElementById("result-two");
const resetBtn = document.getElementById("resetBtn");

let tipPercentage = 0;

function showError(){
    errorMessage.textContent = "Can't be zero";
    numOfPeople.classList.add("input-error");
    numOfPeople.setAttribute("aria-invalid", "true");
}

function clearError(){
    errorMessage.textContent = "";
    numOfPeople.classList.remove("input-error");
    numOfPeople.setAttribute("aria-invalid", "false");
}

function calculate(){
    const billAmount = Number(bill.value);
    const people = Number(numOfPeople.value);

    resetBtn.disabled = !bill.value && !numOfPeople.value && !customTip.value && tipPercentage === 0;

    if(numOfPeople.value.trim() !=="" && people === 0){
        showError();
    }else{
        clearError();
    }

    if(!(billAmount > 0) || !(people > 0)){
        resultOne.textContent = "$0.00";
        resultTwo.textContent = "$0.00";
        return;
    }
    const tip = billAmount * tipPercentage / 100 / people;
    const total = billAmount / people + tip;
    
    resultOne.textContent = `$${tip.toFixed(2)}`;
    resultTwo.textContent = `$${total.toFixed(2)}`;
}
bill.addEventListener("input", calculate);
numOfPeople.addEventListener("input",calculate);

customTip.addEventListener("input", () =>{
    selectTipBtn.forEach((btn) => btn.classList.remove("active"));
    tipPercentage= Math.max(0, Number(customTip.value) || 0);
    calculate();
});

selectTipBtn.forEach((btns) => {
    btns.addEventListener("click", () => {
        customTip.value= "";
        selectTipBtn.forEach((btn) => btn.classList.remove("active"));
        btns.classList.add("active");
        tipPercentage = Number(btns.value);
        calculate();
    });
});

resetBtn.addEventListener("click", () => {
    bill.value = "";
    numOfPeople.value = "";
    customTip.value= "";
    tipPercentage= 0;
    selectTipBtn.forEach((btn) => btn.classList.remove("active"));
    calculate();
    bill.focus();
});