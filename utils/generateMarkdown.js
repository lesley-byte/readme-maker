// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (Object.keys(license).length !== 0) {
        return `
![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)
`;
    }
    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (Object.keys(license).length !== 0) {
        return `* [License](#license)`;
}
return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    console.log(typeof license)
    console.log(license)
    if (Object.keys(license).length !== 0) {
        return `
## License  

  This project is licensed under the ${license} license.
  `;
    } else {
    return '';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown( {projectName, description,installation, usage, license, contributing, tests, username, email} ) {
licSec = renderLicenseSection(license);
licBadge = renderLicenseBadge(license);
licTable = renderLicenseLink(license);

  return   `# ${projectName}  
${licBadge}
## Description

${description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
${licTable}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${installation}

## Usage

${usage}
${licSec}
## Contributing

${contributing}

## Tests

${tests}

## Questions

Project created by: ${username}.
Feel free to contact me by email with any questions: [Email](mailto:${email})

My Github profile is at: [GitHub](https://github.com/${username})`;

}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
//   makeMarkdown,
};



