const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');
const fs = require('fs');

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