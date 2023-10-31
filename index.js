const inquirer = require("inquirer");

const fs = require("fs");

const { triangle, square, circle } = require("./lib/shapes");


function writeToFile(fileName, answers) {

  let svgString = "";

  svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

  
  svgString += "<g>";
// Use g when inheritting presentation attributes; += to assign addition
  svgString += `${answers.shape}`;

  let shapeChoice;
  if (answers.shape === "triangle") {
    shapeChoice = new triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.background}"/>`;
  } else if (answers.shape === "square") {
    shapeChoice = new square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.background}"/>`;
  } else {
    shapeChoice = new circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.background}"/>`;
  }

  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.font}">${answers.text}</text>`;

  svgString += "</g>";

  svgString += "</svg>";

  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        message:
          "What chracters would you like you logo to display? (Max 3 characters)",
        name: "text",
      },
      {
        type: "input",
        message:
          "Choose the font's color (Enter a hexadecimal number or color keyword)",
        name: "font",
      },
      {
        type: "list",
        message: "What shape would you like the logo to render?",
        choices: ["triangle", "square", "circle"],
        name: "shape",
      },
      {
        type: "input",
        message:
          "Choose the shape's color (Enter color keyword OR a hexadecimal number)",
        name: "background",
      },
    ])


    .then((answers) => {
      if (answers.text.length > 3) {
        console.log("Maximum 3 characters");
        promptUser();
      } else {

        writeToFile("logo.svg", answers);
      }
    });
}


promptUser();