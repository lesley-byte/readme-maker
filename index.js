import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import questions from "./utils/questions.js";
import generateMarkdown from "./utils/generateMarkdown.js";
import chalk from "chalk";

/**
 * Displays a welcome message in the terminal.
 */
const displayWelcomeMessage = () => {
  console.clear();
  console.log(
    chalk.blueBright(`
  ===================================================
              Welcome to the README Generator!
  ===================================================
  Quickly create a professional README file 
  for your project by answering a few questions.
  Let's get started!
  `)
  );
};

/**
 * Writes data to a specified file.
 * @param {string} fileName - The name of the file to write.
 * @param {string} data - The content to write to the file.
 */
const writeToFile = async (fileName, data) => {
  const filePath = path.join(process.cwd(), fileName);
  try {
    console.log(chalk.yellow("🔄 Writing your README file..."));
    await fs.promises.writeFile(filePath, data);
    console.log(chalk.green(`✅ README.md has been generated at ${filePath}`));
  } catch (err) {
    console.error(chalk.red("❌ Error writing file:", err));
  }
};

/**
 * Initializes the application by prompting the user and generating a README.
 */
const init = async () => {
  try {
    displayWelcomeMessage();
    const responses = await inquirer.prompt(questions);
    console.log(chalk.cyan("🔄 Generating your README content..."));
    const markdownContent = generateMarkdown(responses);
    const fileName = `${responses.title
      .toLowerCase()
      .split(" ")
      .join("-")}-README.md`;
    await writeToFile(fileName, markdownContent);
  } catch (err) {
    console.error(chalk.red("❌ Error during initialization:", err));
  }
};

// Start the application
init();
