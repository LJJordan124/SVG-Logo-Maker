// Import to help with rendering
const { Circle, Square, Triangle } = require("./shapes");

class SvgFactory {
  constructor() {
    this.textProperty = ""; // Holds the text property for SVG rendering
    this.shapeProperty = ""; // Holds the shape property for SVG rendering
  }

  render() {
    // Generates the SVG code with the shape and text properties
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeProperty}${this.textProperty}</svg>`;
  }

  setText(message, color) {
    // Sets the text property for SVG rendering
    this.textProperty = `<text x="150" y="135" font-size="45" text-anchor="middle" fill="${color}">${message}</text>`;
  }

  setShape(shape) {
    // Sets the shape property for SVG rendering
    this.shapeProperty = shape.render();
  }

  createLogo(textColor, text, shape, shapeColor) {
    let shapeInstance;

    switch (shape) {
      case "circle":
        shapeInstance = new Circle();
        break;
      case "square":
        shapeInstance = new Square();
        break;
      case "triangle":
        shapeInstance = new Triangle();
        break;
    }

    shapeInstance.setColor(shapeColor); // Sets the color of the shape instance

    this.setText(text, textColor); // Sets the text and text color
    this.setShape(shapeInstance); // Sets the shape instance

    return this.render(); // Generates and returns the SVG code for the logo
  }
}

module.exports = { SvgFactory }; // Exports the SvgFactory class