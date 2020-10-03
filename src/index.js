// app

const faraz = {
  age: 33,
  job: "BD Manager",
  lastName: "Hafeez",
  firstName: "Faraz",
  joinedAt: new Date("2016-09-01"),
  dateOfbirth: new Date("1986-09-01")
};

const max = {
  age: 27,
  job: "BDR",
  lastName: "Kess",
  firstName: "Max",
  joinedAt: new Date("2018-09-01"),
  dateOfbirth: new Date("1984-09-01")
};

const jess = {
  age: 27,
  job: "BDR",
  lastName: "Resuch",
  firstName: "jes",
  joinedAt: new Date("2020-09-01"),
  dateOfbirth: new Date("1991-09-01")
};

const robert = {
  age: 32,
  job: "BDR",
  lastName: "smith",
  firstName: "robert",
  joinedAt: new Date("2017-09-01"),
  dateOfbirth: new Date("1991-09-01")
};

const eddie = {
  age: 35,
  job: "BDR",
  lastName: "guerrero",
  firstName: "Eddie",
  joinedAt: new Date("2016-09-01"),
  dateOfbirth: new Date("1991-09-01")
};
const john = {
  age: 29,
  job: "BDR",
  lastName: "smith",
  firstName: "John",
  joinedAt: new Date("2018-09-01"),
  dateOfbirth: new Date("1991-09-01")
};

const salesTeam = [faraz, max, jess, robert, eddie, john];

/// calculateTenure(person) returns 2020 - the year when they joined
function caculateTenure(person) {
  return new Date().getFullYear() - person.joinedAt.getFullYear();
}

//console.log(caculateTenure(jess));

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

    displayTeamMemeber(salesPerson, container); //line 44 what I want to be displayed 

  }
}

displayTeam(salesTeam);



/// HOMEWORK
// Display how old where when they joined the company

function howOldwhenjoined(person) {

  return person.joinedAt.getFullYear() - person.dateOfbirth.getFullYear()

}
console.log(howOldwhenjoined(faraz));


// Add styles and wrap the text in inner html with <p> elements

function displayTeamMember(person, teamContainer) {
  const p = document.createElement("p");
  p.innerHTML = person.firstName + " " + person.lastName + " " + howOldwhenjoined(person);
  teamContainer.appendChild(p);
}


function dislayATeam(teamname) {
  const container = document.getElementById("demo")
  for (let i = 0; i < salesTeam.length; i++) {
    const salesmember = salesTeam[i];
    displayTeamMember(salesmember, container);
  }
}

dislayATeam(salesTeam);



// Add also the marketing team and paint it too


const jack = {
  age: 32,
  job: "BDR",
  lastName: "Jack",
  firstName: "Nicholson",
  joinedAt: new Date("2017-09-01"),
  dateOfbirth: new Date("1991-09-01")
};

const jim = {
  age: 35,
  job: "BDR",
  lastName: "Kessler",
  firstName: "Jim",
  joinedAt: new Date("2016-09-01"),
  dateOfbirth: new Date("1991-09-01")
};
const andrea = {
  age: 29,
  job: "BDR",
  lastName: "Andrea",
  firstName: "Smith",
  joinedAt: new Date("2018-09-01"),
  dateOfbirth: new Date("1991-09-01")
};
const marketingTeam = [jack, jim, andrea];




function displayBTeam(teamname) {
  const container = document.getElementById("demo")
  for (let i = 0; i < marketingTeam.length; i++) {
    const mktMember = marketingTeam[i];
    displayTeamMember(mktMember, container);
  }
}

displayBTeam(marketingTeam);
