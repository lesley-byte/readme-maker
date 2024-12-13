// Function to render a license badge based on the license selected
function renderLicenseBadge(license = "None") {
  if (license === "None") {
    return ""; // Return empty string if no license
  }
  return `![License](https://img.shields.io/badge/license-${license.replace(
    " ",
    "%20"
  )}-blue)`;
}

// Function to render a license link
function renderLicenseLink(license = "None") {
  if (license === "None") {
    return ""; // Return empty string if no license
  }
  return `- [License](#license)`;
}

// Function to render the license section
function renderLicenseSection(license = "None") {
  if (license === "None") {
    return "This project does not have a license specified.";
  }
  return `## License

This project is licensed under the ${license} license.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions about this project, feel free to contact me:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})
`;
}

export default generateMarkdown;
