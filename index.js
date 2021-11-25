const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/generateTeam");
const { ensureExpectedIsNonNegativeInteger } = require("jest-matcher-utils");

team = [];

const managerQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the team manager's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the team manager's e-mail address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's office number?",
      },
      {
        type: "list",
        name: "addTeamMember",
        message: "Which team member/s would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more members.",
        ],
      },
    ])
    .then((managerAnswers) => {
      const manager = new Manager(
        managerAnswers.name,
        managerAnswers.id,
        managerAnswers.email,
        managerAnswers.officeNumber
      );
      team.push(manager);
      switch (managerAnswers.addTeamMember) {
        case "Engineer":
          engineerQuestions();
          break;
        case "Intern":
          internQuestions();
          break;
        case "I don't want to add any more members.":
          writeToFile("dist/team.html", generateTeam(team));
      }
    });
};

const engineerQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's e-mail address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
      },
      {
        type: "list",
        name: "addTeamMember",
        message: "Which team member/s would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more members.",
        ],
      },
    ])
    .then((engineerAnswers) => {
      const engineer = new Engineer(
        engineerAnswers.name,
        engineerAnswers.id,
        engineerAnswers.email,
        engineerAnswers.github
      );
      team.push(engineer);
      switch (engineerAnswers.addTeamMember) {
        case "Engineer":
          engineerQuestions();
          break;
        case "Intern":
          internQuestions();
        case "I don't want to add any more members.":
          writeToFile("dist/team.html", generateTeam(team));
      }
    });
};

// const internQuestions = () => {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "name",
//         message: "What is the intern's name?",
//       },
//       {
//         type: "input",
//         name: "id",
//         message: "What is the intern's ID?",
//       },
//       {
//         type: "input",
//         name: "email",
//         message: "What is the intern's e-mail address?",
//       },
//       {
//         type: "input",
//         name: "school",
//         message: "What is the intern's school?",
//       },
//       {
//         type: "list",
//         name: "addTeamMember",
//         message: "Which team member/s would you like to add?",
//         choices: [
//           "Engineer",
//           "Intern",
//           "I don't want to add any more members.",
//         ],
//       },
//     ])
//     .then((internAnswers) => {
//       console.log(internAnswers);
//     });
// };
// internQuestions();

managerQuestions();

function writeToFile(filename, data) {
  fs.writeFile(filename, data, (err) => {
    if (err) throw err;
    console.log("File was saved.");
  });
}
