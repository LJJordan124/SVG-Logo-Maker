const inquirer = require('inquirer');
const fs = require('fs');
const generateSvg = require('./lib/generateSvg');
const makeShape = require('./lib/makeShape')

inquirer
    .prompt([
        {
            type: 'input',
            name: 'logoName',
            message: 'TEXT: Enter up to (3) Characters:',
        },
        {
            type: 'input',
            name: 'textColor',
            message: `TEXT COLOR: Enter a color keyword (OR a hexadecimal number):`,
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: `SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):`,
        },
        {
            type: 'list',
            name: 'logoShape',
            message: `Please choose a logo shape:`,
            choices: ['triangle', 'circle', 'square'],
        },
    ])
    .then((data) => {
        const svgPath = './Final-Logo/logo.svg';
        const producedLogo = makeShape(data);
        
        fs.writeFile(svgPath, generateSvg(producedLogo), (err) =>
        err ? console.error(err) : console.log('Generated logo.svg')
        );
    })
.catch((err) => console.error(err));