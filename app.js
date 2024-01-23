console.log("its working");

const STARWARS_URL = "https://swapi.dev/api/people";

function fetchCharacters() {
  fetch(STARWARS_URL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

fetchCharacters();

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
    containerEl.innerHTML = characterHTML;
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
renderCharacterTable;
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
// }
