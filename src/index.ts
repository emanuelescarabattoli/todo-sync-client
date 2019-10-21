import program = require("commander");
import glob = require("glob");
import inquirer = require("inquirer");

program
  .option("-i, --init", "Initialize a project in the current directory")
  .option("-s, --sync", "Synchronize the current directory");

program.parse(process.argv)

if (program.init) {
inquirer.prompt(
  [
    {
      prefix: "init: ",
      name: "username",
      type: "input",
      message: "Enter your username"
    },
    {
      prefix: "init: ",
      name: "password",
      type: "password",
      message: "Enter your password"
    }
  ]).then(answers => {
    console.log(answers)
  })
}
