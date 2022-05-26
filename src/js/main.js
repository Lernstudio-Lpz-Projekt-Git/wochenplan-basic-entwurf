import './../scss/style.scss'

let currDate = new Date().toLocaleString().substring(0, 9);

document.getElementById("currDate").innerHTML =
  `Aktueller Speiseplan vom ${currDate}`;

const date = new Date();
let currentThursday = new Date(date.getTime() + (3 - ((date.getDay() + 6) % 7)) * 86400000);
let yearOfThursday = currentThursday.getFullYear();
let firstThursday = new Date(new Date(yearOfThursday, 0, 4).getTime() + (3 - ((new Date(yearOfThursday, 0, 4).getDay() + 6) % 7)) * 86400000);
let weekNumber = Math.floor(1 + 0.5 + (currentThursday.getTime() - firstThursday.getTime()) / 86400000 / 7);

document.getElementById("kw").innerHTML =
  `${getDateOfISOWeek(weekNumber, yearOfThursday)} - KW: ${weekNumber}`;

function getDateOfISOWeek(w, y) {
  const ISOweekStart = new Date(y, 0, 1 + (w - 1) * 7);;
  const ISOweekEnd = new Date(y, 0, 1 + (w - 1) * 7);;
  if (ISOweekStart.getDay() <= 4) {
    ISOweekStart.setDate(ISOweekStart.getDate() - ISOweekStart.getDay() + 1);
    ISOweekEnd.setDate(ISOweekStart.getDate() - ISOweekStart.getDay() + 7);
  } else {
    ISOweekStart.setDate(ISOweekStart.getDate() + 8 - ISOweekStart.getDay());
    ISOweekEnd.setDate(ISOweekStart.getDate() + 7 - ISOweekStart.getDay());
  }
  console.log(ISOweekStart.toLocaleString().substring(0, 9));
  return `${ISOweekStart.toLocaleString().substring(0, 5)} - 
  ${ISOweekEnd.toLocaleString().substring(0, 9)}
  `;
}

document.querySelector('#app').innerHTML = `
<div class="cardTitle">Gespeicherte Menüs</div>
  <div class="addCard">
    <div>Speise hinzufügen</div>
    <button class="addCard_btn">-</button>
  </div>

  <div class="cardContainer">
  <div class="card noselect" id="card1">
    <button class="deleteCard_btn">-</button>
    <div class="cardName">Kartoffelsuppe</div>
    <div class="cardDescr">Beschreibung, vegetarisch oder mit Wiener-Würstchen</div>
  </div>

  <div class="card noselect" id="card1">
    <button class="deleteCard_btn">-</button>
    <div class="cardName">Grießbrei</div>
    <div class="cardDescr">Beschreibung, vegetarisch und mit Pflaumen</div>
  </div>

  <div class="card noselect" id="card1">
  <button class="deleteCard_btn">-</button>
    <div class="cardName">Königsberger Klops</div>
    <div class="cardDescr">Beschreibung, mit Fleisch und mit Kartoffeln</div>
  </div>

  <div class="card noselect" id="card1">
  <button class="deleteCard_btn">-</button>
    <div class="cardName">Königsberger Klops</div>
    <div class="cardDescr">Beschreibung, mit Fleisch und mit Kartoffeln</div>
  </div>

  <div class="card noselect" id="card1">
  <button class="deleteCard_btn">-</button>
    <div class="cardName">Königsberger Klops</div>
    <div class="cardDescr">Beschreibung, mit Fleisch und mit Kartoffeln</div>
  </div>

  <div class="card noselect" id="card1">
  <button class="deleteCard_btn">-</button>
    <div class="cardName">Königsberger Klops</div>
    <div class="cardDescr">Beschreibung, mit Fleisch und mit Kartoffeln</div>
  </div>

  <div class="card noselect" id="card1">
  <button class="deleteCard_btn">-</button>
    <div class="cardName">Königsberger Klops</div>
    <div class="cardDescr">Beschreibung, mit Fleisch und mit Kartoffeln</div>
  </div>

  <div class="card noselect" id="card1">
  <button class="deleteCard_btn">-</button>
    <div class="cardName">Königsberger Klops</div>
    <div class="cardDescr">Beschreibung, mit Fleisch und mit Kartoffeln</div>
  </div>

  <div class="card noselect" id="card1">
  <button class="deleteCard_btn">-</button>
    <div class="cardName">Königsberger Klops</div>
    <div class="cardDescr">Beschreibung, mit Fleisch und mit Kartoffeln</div>
  </div>

  <div class="card noselect" id="card1">
  <button class="deleteCard_btn">-</button>
    <div class="cardName">Königsberger Klops</div>
    <div class="cardDescr">Beschreibung, mit Fleisch und mit Kartoffeln</div>
  </div>

  <div class="card noselect" id="card1">
  <button class="deleteCard_btn">-</button>
    <div class="cardName">Königsberger Klops</div>
    <div class="cardDescr">Beschreibung, mit Fleisch und mit Kartoffeln</div>
  </div>
  </div>
`;