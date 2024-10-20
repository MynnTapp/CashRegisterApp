const purchaseButton = document.getElementById("purchase-btn");
const input = document.getElementById("cash");
const banner = document.getElementById("change-due");

let price = 19.5;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const currencyValues = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  "ONE HUNDRED": 100,
};

const tolerance = 0.01;

function cashRegisterChecker() {
  let cashGiven = parseFloat(input.value);
  let amountDue = parseFloat((cashGiven - price).toFixed(2));
  let totalCashInRegister = parseFloat(cid.reduce((acc, curr) => acc + curr[1], 0).toFixed(2));
  const amountStorage = [];

  cid = cid.reverse();

  if (cashGiven < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  if (Math.abs(cashGiven - price) < tolerance) {
    banner.textContent = "No change due - customer paid with exact cash";
    return;
  }

  if (totalCashInRegister < amountDue) {
    banner.textContent = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  for (const [currency, value] of cid) {
    let currencyAmount = value;
    let currencyValue = currencyValues[currency];
    let amountFromCurrency = 0;

    while (amountDue >= currencyValue && currencyAmount > 0) {
      amountDue = parseFloat((amountDue - currencyValue).toFixed(2));
      currencyAmount = parseFloat((currencyAmount - currencyValue).toFixed(2));
      amountFromCurrency = parseFloat((amountFromCurrency + currencyValue).toFixed(2));
    }

    if (amountFromCurrency > 0) {
      amountStorage.push([currency, amountFromCurrency]);
    }
  }

  if (amountDue > tolerance) {
    banner.textContent = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  if (totalCashInRegister === cashGiven - price) {
    let coinList = `<ul>${amountStorage.map(([currency, amount]) => `<li>${currency}: $${amount.toFixed(2)}</li>`).join("")}</ul>`;
    banner.innerHTML = "Status: CLOSED" + coinList;
    return;
  }

  let coinList = `<ul>${amountStorage.map(([currency, amount]) => `<li>${currency}: $${amount.toFixed(2)}</li>`).join("")}</ul>`;
  banner.innerHTML = "Status: OPEN" + coinList;
}
