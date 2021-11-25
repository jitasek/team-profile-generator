const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

// function that generates card for Manager, Engineer and Intern
//function generateTeamCards(team) {
//let cards = [];
// loop through team and generate relevant cards for each team member
//}

// function for generating Manager card
// function for generating Engineer card
// function for generating Intern card

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
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
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
        ${generateCards(team)}
      </div>
    </body>
  </html>`;
}
module.exports = generateTeam;
