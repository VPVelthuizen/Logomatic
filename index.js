// TO-DOs
// Should return an SVG file named logo.svg
// Output text "Generated logo.svg" print in command line
// When opened in browser show a 300x200 pixel image that matches criteria
// Make a parent class shape
// Test each class for a render() method that returns a string
// Update README
// TO-DOs also in shapes.js

const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');
const fs = require('fs');
const jest = require('jest');

// Ask the user to describe the logo
inquirer.prompt([
    { type: 'input', message: 'What characters are in the logo? Enter up to 3:', name: 'text' },
    { type: 'input', message: 'Choose a color or hexadecimal value for the text color:', name: 'textColor' },
    { type: 'list', message: 'Choose a shape from the list:', name: 'shape', choices: ['Square', 'Circle', 'Triangle'] },
    { type: 'input', message: 'Enter the color of the shape:', name: 'color' },
])

// Use what they entered to create the logo
    .then((response) => {
        let newShape;
        switch (response.shape) {
            case 'Square':
                newShape = new shapes.Square();
                break;
            case 'Circle':
                newShape = new shapes.Circle();
                break;
            case 'Triangle':
                newShape = new shapes.Triangle();
                break;
            default:
                console.log('Invalid shape selected');
                return;
        }
        newShape.color = `${response.color}`;
        newShape.textColor = `${response.textColor}`;
        newShape.text = `${response.text}`;
        const svgContent = newShape.render();
        fs.writeFile('logo.svg', svgContent, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Generated logo.svg');
        });
    });