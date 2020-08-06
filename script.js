const currency_1 = document.getElementById("currency-one");
const currency_2 = document.getElementById("currency-two");
const amount_1 = document.getElementById("amount-one");
const amount_2 = document.getElementById("amount-two");

const ratediv = document.getElementById("rate");
const swap = document.getElementById("swap");

//update the dom after recieving input from the api https://exchangeratesapi.io/
function Calculate() {
  const curr1 = currency_1.value;
  const curr2 = currency_2.value;
  fetch(`https://api.exchangeratesapi.io/latest?base=${curr1}`)
    .then((a) => a.json())
    .then((data) => {
      // console.log(data);

      const rate = data.rates[curr2];
      ratediv.innerText = `1 ${curr1} = ${rate} ${curr2}`;
      amount_2.value = (amount_1.value * rate).toFixed(4);
    });
}

currency_1.addEventListener("change", Calculate);
amount_1.addEventListener("input", Calculate);
currency_2.addEventListener("change", Calculate);
amount_2.addEventListener("input", Calculate);

swap.addEventListener("click", () => {
  const temp = currency_1.value;
  currency_1.value = currency_2.value;
  currency_2.value = temp;
  Calculate();
});

Calculate();
