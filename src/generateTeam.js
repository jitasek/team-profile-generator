const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

// function that generates card for team (Manager and/or Engineer and/or Intern)
function generateTeamCards(team) {
  let cards = [];
  // loop through team members and generate relevant card for each
  for (let i = 0; i < team.length; i++) {
    const teamMember = team[i];
    switch (teamMember.getRole()) {
      case "Manager":
        const manager = new Manager(
          teamMember.name,
          teamMember.id,
          teamMember.email,
          teamMember.officeNumber
        );
        cards.push(generateManagerCard(manager));
        break;
      case "Engineer":
        const engineer = new Engineer(
          teamMember.name,
          teamMember.id,
          teamMember.email,
          teamMember.github
        );
        cards.push(generateEngineerCard(engineer));
        break;
      case "Intern":
        const intern = new Intern(
          teamMember.name,
          teamMember.id,
          teamMember.email,
          teamMember.school
        );
        cards.push(generateInternCard(intern));
    }
  }
  return cards.join(``);
}

// function for generating Manager card
let generateManagerCard = (Manager) => {
  return `<div class="card m-1 shadow" style="width: 18rem">
    <div class="card-header bg-info">
      <h3 class="card-title">${Manager.getName()}</h3>
      <h6 class="card-text">${Manager.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Manager.getId()}</li>
        <li class="list-group-item">
            Email: <a href="mailto: ${Manager.getEmail()}">${Manager.getEmail()}</a>
          </li>
        <li class="list-group-item">
          Office Number: ${Manager.getOfficeNumber()}
        </li>
      </ul>
    </div>
  </div>`;
};
// function for generating Engineer card
let generateEngineerCard = (Engineer) => {
  return `<div class="card m-1 shadow" style="width: 18rem">
  <div class="card-header bg-info">
    <h3 class="card-title">${Engineer.getName()}</h3>
    <h6 class="card-text">${Engineer.getRole()}</h6>
  </div>
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${Engineer.getId()}</li>
      <li class="list-group-item">
            Email: <a href="mailto: ${Engineer.getEmail()}">${Engineer.getEmail()}</a>
      </li>
      <li class="list-group-item">
          GitHub username:
          <a href="https://github.com/${Engineer.getGitHub()}" target="_blank">${Engineer.getGitHub()}</a>
      </li>
    </ul>
  </div>
</div>`;
};
// function for generating Intern card

let generateInternCard = (Intern) => {
  return `<div class="card m-1 shadow" style="width: 18rem">
  <div class="card-header bg-info">
    <h3 class="card-title">${Intern.getName()}</h3>
    <h6 class="card-text">${Intern.getRole()}</h6>
  </div>
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${Intern.getId()}</li>
      <li class="list-group-item">
            Email: <a href="mailto: ${Intern.getEmail()}">${Intern.getEmail()}</a>
          </li>
      <li class="list-group-item">
        School: ${Intern.getSchool()}
      </li>
    </ul>
  </div>
</div>`;
};

// function that generates the team
function generateTeam(team) {
  console.log(team);
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <!-- font awesome link may be needed later -->
      <script
        src="https://kit.fontawesome.com/746e958d3e.js"
        crossorigin="anonymous"
      ></script>
      <!-- bootstrap CSS link -->
      <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
      />
      <title>Our Team</title>
    </head>
    <body>
      <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container py-2">
          <h1 class="display-5 fw-bold text-center">Our Team</h1>
        </div>
      </div>
      <div class="d-flex flex-row flex-wrap justify-content-center">
        ${generateTeamCards(team)}
      </div>
    </body>
  </html>`;
}
module.exports = generateTeam;
