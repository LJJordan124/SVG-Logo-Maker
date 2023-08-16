// The Shape class represents a generic shape with a color property
class Shape {
    constructor() {
      this.color = ""; // Holds the color of the shape
    }
  
    setColor(color) {
      // Sets the color of the shape
      this.color = color;
    }
  }
  
  // The Circle class extends the Shape class and represents a circle shape
  class Circle extends Shape {
    render() {
      // Renders the circle SVG code with the assigned color
      return `<circle cx="150" cy="120" r="80" fill="${this.color}"/>`;
    }
  }
  
  // The Square class extends the Shape class and represents a square shape
  class Square extends Shape {
    render() {
      // Renders the square SVG code with the assigned color
      return `<rect x="50" y="45" width="200" height="200" fill="${this.color}"/>`;
    }
  }
  
  // The Triangle class extends the Shape class and represents a triangle shape
  class Triangle extends Shape {
    render() {
      // Renders the triangle SVG code with the assigned color
      return `<polygon points="150,18 244,182 56,182" fill="${this.color}"/>`;
    }
  }
  
  module.exports = { Circle, Square, Triangle }; // Exports the Circle, Square, and Triangle classes