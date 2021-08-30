// ▓▒▒▒▒▒▒▒▒▒▒▒《 Fetching API 》▒▒▒▒▒▒▒▒▒▒▒▓
const loadRandomUser = () => {
  fetch(`https://randomuser.me/api/`)
    .then((res) => res.json())
    .then((data) => displayResult(data));
};
loadRandomUser();

const displayResult = (user) => {
  const spinner = document.getElementById("spinner");
  spinner.style.display = "none";
  const displayResultDiv = document.getElementById("displayResult");
  const personBob = document.createElement("div");
  const personName = document.createElement("h3");
  const personLocation = document.createElement("p");
  personBob.innerHTML = `<img class="userImg" src="${user.results[0].picture.large}">`;
  personName.innerText = `${user.results[0].name.first} ${user.results[0].name.last}`;
  personLocation.innerText = `
  Country Name: ${user.results[0].location.country}
  City Name: ${user.results[0].location.city}
  State Name: ${user.results[0].location.state}
  Street Name: ${user.results[0].location.street.name}
  Post Code: ${user.results[0].location.postcode}
  Coordinates : (longitude = ${user.results[0].location.coordinates.longitude}), (latitude ${user.results[0].location.coordinates.latitude})
  TimeZone : ${user.results[0].location.timezone.offset}  ${user.results[0].location.timezone.description}
  `;
  displayResultDiv.appendChild(personBob);
  displayResultDiv.appendChild(personName);
  displayResultDiv.appendChild(personLocation);
};
