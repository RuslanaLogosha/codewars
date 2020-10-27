const btn = document.querySelector(".js-get-data");
const tBody = document.querySelector("table > tbody");

btn.addEventListener("click", handleClick);

// Напишем функцию которая будет возвращать результат fetch (обещание) к указаному url
function getCurrencyRates() {
  return fetch(
    "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11"
  )
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .catch(err => {
      console.error("Error: ", err);
    });
}

// Получает массив объектов валют и рендерит результат
function updateView(currencies) {
  const htmlString = currencies.reduce(
    (acc, currency) => acc + createTableRow(currency),
    ""
  );

  tBody.innerHTML = htmlString;
}

// При клике вызовем getCurrencyRates и после того как
// обещание выполнятся, внутри then отрендерим результат по шаблону
function handleClick() {
  getCurrencyRates().then(updateView);
}

function createTableRow({ ccy, buy, sale }) {
  return `
    <tr scope="row">
      <td>${ccy}</td>
      <td>${Number(buy).toFixed(2)}</td>
      <td>${Number(sale).toFixed(2)}</td>
    </tr>
  `;
}
