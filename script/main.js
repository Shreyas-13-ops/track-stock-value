// let initialPrice = document.querySelector("#initial-price");
// let stockQty = document.querySelector("#stock-quantity");
// let currentPrice = document.querySelector("#current-price");
// let submitBtn = document.querySelector("#submit-btn");
// let outputDiv = document.querySelector("#output-box");

// submitBtn.addEventListener("click", submitHandler);

// function submitHandler() {
//   if (
//     initialPrice.value === "" ||
//     stockQty.value === "" ||
//     currentPrice.value === ""
//   ) {
//     outputDiv.textContent = "Please fill out all Fields*";
//     outputDiv.style.color = "red";
//   } else {
//     // outputDiv.textContent = "";
//     let ipValue = initialPrice.value;
//     let qtyTotal = stockQty.value;
//     let currValue = currentPrice.value;
//     calculateProfitAndLoss(ipValue, qtyTotal, currValue);
//   }
// }

// function calculateProfitAndLoss(initial, quantity, current) {
//   if (initial > current) {
//     //Loss
//     let loss = (initial - current) * quantity;
//     let lossPercent = (loss / (initial * quantity)) * 100;
//     lossPercent.toFixed(2);

//     // showOutput(
//     //   `Hey your loss is ₹${loss} and your loss percentage is ${lossPercent}%.`
//     // );

//     outputDiv.textContent = `Hey your loss is ₹${loss} and your loss percentage is ${lossPercent}%.`;
//   } else if (current > initial) {
//     //Profit
//     let profit = (current - initial) * quantity;
//     let profitPercent = (profit / (initial * quantity)) * 100;
//     profitPercent.toFixed(2);

//     // showOutput(
//     //   `Hey your profit is ₹${profit} and your profit percentage is ${profitPercent}%.`
//     // );

//     outputDiv.textContent = `Hey your profit is ₹${profit} and your profit percentage is ${profitPercent}%.`;
//   } else {
//     // No profit, no loss
//     // showOutput(`No pain no gain`);

//     outputDiv.textContent = `No pain no gain`;
//   }
// }

// // For testing
// // calculateProfitAndLoss(50, 10, 100);
// // calculateProfitAndLoss(100, 10, 90);

// function showOutput(message) {
//   outputDiv.textContent = message;
//   outputDiv.style.color = "blue";
// }


const ipInput = document.querySelector('#initial-price');
const quantityInput = document.querySelector('#stock-quantity');
const cpInput = document.querySelector('#current-price');
const outputBox = document.querySelector('#output-box');
const submitBtn = document.querySelector('#submit-btn');

// Step - Adding Event Listeners
submitBtn.addEventListener('click', submitHandler);

function submitHandler() {
	let initialPrice = Number(ipInput.value);
	let currentPrice = Number(cpInput.value);
	let stocksQuantity = Number(quantityInput.value);

	calculateProfitOrLoss(initialPrice, stocksQuantity, currentPrice);
}

// Step - Calculate profit and Loss
function calculateProfitOrLoss(initial, quantity, current) {
	// loss condition
	if (initial > current) {
		let loss = (initial - current) * quantity;
		let lossPercentage = (loss / (initial * quantity)) * 100;
		outputBox.style.color = 'red';
		outputBox.innerHTML = `Whoops!! Your loss is ${loss} and loss Percentage is ${lossPercentage}% :(`;
	}
	// profit calculation
	else if (initial < current) {
		let profit = (current - initial) * quantity;
		let profitPercentage = (profit / (initial * quantity)) * 100;
		outputBox.style.color = 'green';
		outputBox.innerHTML = `Yay!! Your Profit is ${profit.toFixed(
			2
		)} and profit Percentage is ${profitPercentage.toFixed(2)}%`;
	}
	// No profit, no loss
	else {
		outputBox.style.color = 'white';
		outputBox.innerHTML = `No pain No gain, and no gain no pain :)`;
	}
}