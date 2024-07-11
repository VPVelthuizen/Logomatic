// TO-DOs
// Should return an SVG file named logo.svg
// Output text "Generated logo.svg" print in command line
// When opened in browser show a 300x200 pixel image that matches criteria
// Make a parent class shape
// Test each class for a render() method that returns a string
// Update README
// TO-DOs also in shapes.js

const inquirer = require('inquirer');
// const jest = require('jest');
// const Shapes = require('./lib/shapes.js');

// Ask the user to describe the logo
inquirer.prompt([
    { type: 'input', message: 'What characters are in the logo? Enter up to 3:', name: 'text' },
    { type: 'input', message: 'Choose a color or hexadecimal value for the text color:', name: 'textcolor' },
    { type: 'list', message: 'Choose a shape from the list:', name: 'shape', choices: ['Square', 'Circle', 'Triangle'] },
    { type: 'input', message: 'Enter the color of the shape:', name: 'color' },
])

// Use what they entered to create the logo
    .then((response) => {
        console.log(`${response.text} ${response.textcolor} ${response.shape} ${response.color}`)
    });