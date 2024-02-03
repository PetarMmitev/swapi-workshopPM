console.log("its working");
const containerEl = document.querySelector(".container");

const STARWARS_URL = "https://swapi.dev/api/people";
const STARWARS_SHIP_URL = "https://swapi.dev/api/starships";

function fetchCharacters() {
  fetch(STARWARS_URL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      renderCharacterTable(containerEl, data.results);
    });
}

fetchCharacters();

function fetchShips() {
  fetch(STARWARS_SHIP_URL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
    });
  renderShipTable(containerEl, data.results);
}
fetchShips();

function renderCharacterTable(containerEl, characters) {
  let characterHTML = "";
  for (let character of characters) {
    characterHTML += `
    <tr>
    <td>${character.name}</td>
    <td>${character.height}</td>
    <td>${character.mass}</td>
    <td>${character.gender}</td>
    <td>${character.birth_year}</td>
  </tr>`;
  }
  containerEl.innerHTML = `
  <table>
     <thead>
       <tr>
         <th>Name</th>
         <th>Height</th>
         <th>Mass</th>
         <th>Gender</th>
         <th>Birth year</th>
       </tr>
     </thead>
     <tbody>
       ${characterHTML}
     </tbody>
   </table>
`;
}
function renderShipTable(containerEl, starships) {
  let characterHTML = "";
  for (let starship of starships) {
    characterHTML += `
    <tr>
    <td>${starship.name}</td>
    <td>${starship.model}</td>
    <td>${starship.manufacturer}</td>
    <td>${starship.cost}</td>
    <td>${starship.class}</td>
  </tr>`;
  }
  containerEl.innerHTML = `
  <table>
     <thead>
       <tr>
         <th>Name</th>
         <th>Height</th>
         <th>Mass</th>
         <th>Gender</th>
         <th>Birth year</th>
       </tr>
     </thead>
     <tbody>
       ${starshipHTML}
     </tbody>
   </table>
`;

  //   let characterHTML = "";
  // }
  // for (let reminder of ) {
  //   remindersHTML += `
  //       <tr>
  //         <td style="color: ${reminder.color}" >${reminder.title}</td>
  //         <td>${reminder.priority}</td>
  //         <td>${reminder.description}</td>
  //       </tr>
  //       `;
}
