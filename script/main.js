let initialPrice = document.querySelector("#initial-price");
let stockQty = document.querySelector("#stock-quantity");
let currentPrice = document.querySelector("#current-price");
let submitBtn = document.querySelector("#submit-btn");
let outputDiv = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  if (
    initialPrice.value === "" ||
    stockQty.value === "" ||
    currentPrice.value === ""
  ) {
    outputDiv.textContent = "Please fill out all Fields*";
    outputDiv.style.color = "red";
  } else {
    // outputDiv.textContent = "";
    let ipValue = initialPrice.value;
    let qtyTotal = stockQty.value;
    let currValue = currentPrice.value;
    calculateProfitAndLoss(ipValue, qtyTotal, currValue);
  }
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    //Loss
    let loss = (initial - current) * quantity;
    let lossPercent = (loss / initial) * 100;
    lossPercent.toFixed(2);

    showOutput(
      `Hey your loss is ₹${loss} and your loss percentage is ${lossPercent}%.`
    );
  } else if (current > initial) {
    //Profit
    let profit = (current - initial) * quantity;
    let profitPercent = (profit / initial) * 100;
    profitPercent.toFixed(2);

    showOutput(
      `Hey your profit is ₹${profit} and your profit percentage is ${profitPercent}%.`
    );
  } else {
    //Equal
    showOutput(`No pain no gain`);
  }
}

// For testing
// calculateProfitAndLoss(50, 10, 100);
// calculateProfitAndLoss(100, 10, 90);

function showOutput(message) {
  outputDiv.textContent = message;
  outputDiv.style.color = "blue";
}
