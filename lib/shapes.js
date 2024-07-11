class Shape {
    constructor(text, textColor, shape, color) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.color = color;
    }
}
class Circle extends Shape {
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="75" fill="${this.color}" />
            <text x="150" y="120" text-anchor="middle" fill="${this.textColor}" font-size="50">${this.text}</text>
        </svg>`;
    }
};

class Square extends Shape {
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="75" y="50" width="150" height="150" fill="${this.color}" />
            <text x="150" y="140" text-anchor="middle" fill="${this.textColor}" font-size="50">${this.text}</text>
        </svg>`;
    }
};

class Triangle extends Shape {
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,50 75,200 225,200" fill="${this.color}" />
            <text x="150" y="175" text-anchor="middle" fill="${this.textColor}" font-size="50">${this.text}</text>
        </svg>`;
    }
}

module.exports = {
    Shape, Circle, Square, Triangle
}