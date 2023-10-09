// function to generate markdown for README
const renderLicenseBadge = (license) => {
  if(license !== "None") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return '';
}

const renderLicenseLink = () => {
  if(license !== "None") {
    return `[License](#License)\n`
  }
  return '';
}

function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ### Description

  ${data.description}

  ### Table of contents

  *[Installation](#installation)

  *[Usage](#usage)

  ${renderLicenseLink(data.license)}

  *[Contributing](#contributing)

  *[Test](#test)

  *[Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command: 

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage
  ${data.usage}

  ## License

  This project is licensed under the ${data.license} license.

  ## Contributing

  ${data.contributing}

  ## Tests

  To run tests, run following commang:

  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions

  If you have any questions about the repo open an issue or contact me directlyat ${data.email}.

  You can find more of my work at [${data.github}](https://github.com/${data.github}).

`;
}

module.exports = generateMarkdown;
