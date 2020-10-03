// app

const faraz = {
  age: 33,
  job: "BD Manager",
  lastName: "Hafeez",
  firstName: "Faraz",
  joinedAt: new Date("2016-09-01")
};

const max = {
  age: 27,
  job: "BDR",
  lastName: "Kess",
  firstName: "Max",
  joinedAt: new Date("2018-09-01")
};

const jess = {
  age: 27,
  job: "BDR",
  lastName: "Resuch",
  firstName: "jes",
  joinedAt: new Date("2018-09-01")
};

const salesTeam = [faraz, max, jess];

/// calculateTenure(person) returns 2020 - the year when they joined
function caculateTenure(person) {
  return new Date().getFullYear() - person.joinedAt.getFullYear();
}

console.log(caculateTenure(jess));

// find the app element
// add to it a li element
// insside add ul elements with the team member
// displayTeamMember(person, container)

function displayTeamMemeber(person, teamContainer) {
  // creating
  const div = document.createElement("DIV");

  // add content
  div.innerHTML =
    person.lastName + " " + person.firstName + " : " + caculateTenure(person);

  // add element to the container
  teamContainer.appendChild(div);
}

function displayTeam(team) {
  const container = document.getElementById("app");

  // for loop
  for (let i = 0; i < salesTeam.length; i++) {
    const salesPerson = salesTeam[i];
    displayTeamMemeber(salesPerson, container);
  }
}

displayTeam(salesTeam);



/// HOMEWORK
// Display how old where when they joined the company
// Add styles and wrap the text in inner html with <p> elements
// Add three more team member to the sales team
// Add also the marketing team and paint it too