// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project? ',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is the description of your project? ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'How can someone install your project? ',
        name: 'install'
    },
    {
        type: 'input',
        message: 'How can someone use your project? ',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines of your project? ',
        name: 'contribute'
    },
    {
        type: 'input',
        message: 'How was your project tested? ',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'What license is this project using? ',
        name: 'license',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'Creative Commons Zero v1.0 Universal', 'Mozilla Public License 2.0', 'The Unlicense']
    },
    {
        type: 'input',
        message: 'What is your GitHub username? ',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address? ',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // get license badge markdown
    let licenseMarkdown = '';
    console.log(data.license);

    if (data.license === 'Apache License 2.0') {
        licenseMarkdown = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (data.license === 'GNU General Public License v3.0') {
        licenseMarkdown = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    } else if (data.license === 'MIT License') {
        licenseMarkdown = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (data.license === 'Creative Commons Zero v1.0 Universal') {
        licenseMarkdown = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
    } else if (data.license === 'Mozilla Public License 2.0') {
        licenseMarkdown = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    } else if (data.license === 'The Unlicense') {
        licenseMarkdown = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    }

    // build formatted readme markdown from user inputs
    const formattedReadme = `# ${data.title}
    
${licenseMarkdown}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

## License
This project is covered under the following license: ${data.license}

## Contributing
${data.contribute}

## Tests
${data.tests}

## Questions
${data.username}

Contact me at ${data.email} with any questions`;

    fs.writeFile(fileName, formattedReadme, (err) => {
        err ? console.error(err) : console.log('README.md Created');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => 
        writeToFile('README.md', response)
    );
}

// Function call to initialize app
init();
