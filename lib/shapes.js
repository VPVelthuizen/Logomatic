class Shape {
    constructor(text, textColor, shape, color) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.color = color;
    }
}

class Circle extends Shape {
    renderSquare() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="75" fill="${this.color}" />
            <text x="150" y="125" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

class Square extends Shape {
    renderSquare() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="75" y="50" width="150" height="150" fill="${this.color}" />
            <text x="150" y="125" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

class Triangle extends Shape {
    renderTriangle() {
        const height = Math.sqrt(3) / 2 * 100; // Calculate the height of the equilateral triangle

        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,${100 - height / 2} ${150 - 50},${100 + height / 2} ${150 + 50},${100 + height / 2}" fill="${this.color}" />
            <text x="150" y="${100 + height / 2 + 15}" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}