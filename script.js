const currencyOne = document.getElementById("currency-one");
const amountOne = document.getElementById("amount-one");
const currencyTwo = document.getElementById("currency-two");
const amountTwo = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swapEl = document.getElementById("swap");

let key = "b9f5f1e778d8e76d187839f1";

//
const getCorrencies = async () => {
  const currencyElOne = currencyOne.value;
  const currencyElTwo = currencyTwo.value;

  const currencyRate = await fetch(
    `https://v6.exchangerate-api.com/v6/${key}/latest/${currencyElOne}`
  );
  console.log(currencyRate);
  const currencyData = await currencyRate.json();
  console.log(currencyData);
  let rate = currencyData.conversion_rates[currencyElTwo];
  rateEl.textContent = `1 ${currencyElOne} = ${rate} ${currencyElTwo}`;
  amountTwo.value = (amountOne.value * rate).toFixed(2);
  console.log(amountOne.value * rate);
};

swap.addEventListener("click", () => {
  let temp = currencyTwo.value;
  currencyTwo.value = currencyOne.value;
  currencyOne.value = temp;
});

currencyOne.addEventListener("change", getCorrencies);
currencyTwo.addEventListener("change", getCorrencies);
amountOne.addEventListener("input", getCorrencies);
amountTwo.addEventListener("input", getCorrencies);
