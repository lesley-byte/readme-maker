const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (input) => (input ? true : "Title cannot be empty!"),
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of your project:",
    validate: (input) => (input ? true : "Description cannot be empty!"),
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?",
  },
  { type: "input", name: "usage", message: "How is this project used?" },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "GPL", "Apache 2.0", "None"],
  },
  {
    type: "input",
    name: "contributing",
    message: "What are the contribution guidelines?",
  },
  { type: "input", name: "tests", message: "What are the test instructions?" },
  { type: "input", name: "github", message: "Enter your GitHub username:" },
  { type: "input", name: "email", message: "Enter your email address:" },
];

export default questions;
