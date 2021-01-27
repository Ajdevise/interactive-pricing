const monthlyRadio = document.querySelector("#monthly");
const yearlyRadio = document.querySelector("#yearly");
const priceToggleComponent = document.querySelector(".slider__toggle");
const billingType = document.querySelector("#billing-type");
const moneyFromToggle = document.querySelector("#money");

const addActiveClassToPriceToggleComponent = () => {
  priceToggleComponent.classList.add("active");
}

const removeActiveClassFromPriceToggleComponent = () => {
  priceToggleComponent.classList.remove("active");
}

const onMonthlyRadioChecked = () => {
  removeActiveClassFromPriceToggleComponent();
  if(billingType.textContent === "/ month") return;
  billingType.textContent = "/ month";
  moneyFromToggle.textContent = (parseFloat(moneyFromToggle.textContent) / 10).toFixed(2);
}

const onYearlyRadioChecked = () => {
  addActiveClassToPriceToggleComponent();
  if(billingType.textContent === "/ year") return;
  billingType.textContent = "/ year";
  moneyFromToggle.textContent = (parseFloat(moneyFromToggle.textContent) * 10).toFixed(2);
}

const togglePriceToggleComponentClasses = () => {
  if(priceToggleComponent.classList.contains("active")){
    removeActiveClassFromPriceToggleComponent();
  }else {
    addActiveClassToPriceToggleComponent();
  }
}

const checkProperRadioButton = () => {
  if(yearly.checked){
    monthly.checked = true;
    onMonthlyRadioChecked();
  }else{
    yearly.checked = true;
    onYearlyRadioChecked();
  }
}

const isYearly = () => yearly.checked;

const onButtonClick = () => {
  togglePriceToggleComponentClasses();
  checkProperRadioButton();
}

priceToggleComponent.addEventListener("click", onButtonClick);
monthly.addEventListener("click", onMonthlyRadioChecked);
yearly.addEventListener("click", onYearlyRadioChecked);

function init() {
  if(priceToggleComponent.classList.contains("active")){
    yearly.checked = true;
  }else{
    monthly.checked = true;
  }
}

init();