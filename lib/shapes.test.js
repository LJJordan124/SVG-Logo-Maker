//Import what I will need for the test
const { SvgFactory } = require("./svgFactory");

//Test to verify that shapes, color, font, and shapeColor render correctly.
describe("SVG Rendering", () => {
  test("SVG renders correctly!", () => {
    const svg = new SvgFactory();
    const renderedSVG = svg.createLogo("pink", "SRC", "circle", "red");

    expect(renderedSVG).toContain('fill="pink"');
    expect(renderedSVG).toContain("SRC");
    expect(renderedSVG).toContain("<circle");
    expect(renderedSVG).toContain("red");
  });
});