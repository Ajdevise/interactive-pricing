const monthlyRadio = document.querySelector("#monthly");
const yearlyRadio = document.querySelector("#yearly");
const priceToggleComponent = document.querySelector(".slider__toggle");

const addActiveClassToPriceToggleComponent = () => {
  priceToggleComponent.classList.add("active");
}

const removeActiveClassFromPriceToggleComponent = () => {
  priceToggleComponent.classList.remove("active");
}

const onMonthlyRadioChecked = () => {
  removeActiveClassFromPriceToggleComponent();
}

const onYearlyRadioChecked = () => {
  addActiveClassToPriceToggleComponent();
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
  }else{
    yearly.checked = true;
  }
}

const onButtonClick = () => {
  togglePriceToggleComponentClasses();
  checkProperRadioButton();
}

priceToggleComponent.addEventListener("click", onButtonClick);
monthly.addEventListener("click", onMonthlyRadioChecked);
yearly.addEventListener("click", onYearlyRadioChecked);
