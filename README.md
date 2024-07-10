# Logomatic

## License
[![License: None](https://img.shields.io/badge/License-None-brightgreen)](https://opensource.org/licenses/None)

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Questions](#questions)

## Description
This application will create a logo for you based on your input.

## Installation
NodeJS must be installed, as well as the NPM packages Jest and Inquirer.

## Usage
In order to use this application,. Here is a video demonstrating usage:

## Contribution
In order to contribute, please contact Vincent with the contact information listed at the bottom.

## Testing
To test this application, please

## Questions
Here is my [GitHub account](https://github.com/VPVelthuizen).

Email me with any questions: [VPVelthuizen@gmail.com](mailto:VPVelthuizen@gmail.com)

AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

The application must include Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest. While not a requirement, it is recommended that you place any common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class and use inheritance to reuse the code in the child classes.

Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.

The following example test should pass:

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

You may need to add additional files in the lib folder for handling user input, writing to a file, etc. Writing tests for these additional files is optional.

https://bootcampspot.instructure.com/courses/5329/assignments/74775

Deliverables: 15%

    At least one sample SVG file generated using the application must be submitted.

    Your GitHub repository containing your application code.

Walkthrough Video: 32%

    A walkthrough video that demonstrates the functionality of the SVG logo maker and passing tests must be submitted.

    The README.md file must include a link to the walkthrough video.

    The walkthrough video must show all tests passing from the command line.

    The walkthrough video must demonstrate how a user would invoke the application from the command line.

    The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

    The walkthrough video must demonstrate a generated SVG file, showing the file being opened in the browser. The image in the browser must reflect the choices made by the user (text, shape, and colors).

Technical Acceptance Criteria: 40%

    Satisfies all of the preceding acceptance criteria plus the following:

        Uses the Inquirer package 

Links to an external site..

Uses the Jest package

Links to an external site. for a suite of unit tests.

The application must have Triangle, Square, and Circle classes.
