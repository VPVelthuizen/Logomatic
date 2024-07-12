const shapes = require('./shapes.js')

test('Circle render method should return the correct SVG string', () => {
    let circle = new shapes.Circle;
    circle.color = 'aquamarine';
    circle.text = 'JS';
    circle.textColor = 'pink';
    const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="75" fill="aquamarine" />
            <text x="150" y="120" text-anchor="middle" fill="pink" font-size="50">JS</text>
        </svg>`;
    expect(circle.render()).toBe(expectedSVG);
});

test('Square render method should return the correct SVG string', () => {
    let square = new shapes.Square;
    square.color = 'black';
    square.text = 'NPM';
    square.textColor = 'green';
    const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="75" y="50" width="150" height="150" fill="black" />
            <text x="150" y="140" text-anchor="middle" fill="green" font-size="50">NPM</text>
        </svg>`;
    expect(square.render()).toBe(expectedSVG);
});

test('Triangle render method should return the correct SVG string', () => {
    let triangle = new shapes.Triangle;
    triangle.color = 'red';
    triangle.text = 'SVG';
    triangle.textColor = 'white';
    const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,50 75,200 225,200" fill="red" />
            <text x="150" y="175" text-anchor="middle" fill="white" font-size="50">SVG</text>
        </svg>`;
    expect(triangle.render()).toBe(expectedSVG);
});