import program = require("commander");
import fs = require("fs");
import glob = require("glob");
import inquirer = require("inquirer");

program
  .option("-i, --init", "Initialize a project in the current directory")
  .option("-s, --sync", "Synchronize the current directory");

program.parse(process.argv);

if (program.init) {
  inquirer.prompt(
    [
      {
        message: "Enter your username",
        name: "username",
        prefix: "init:",
        type: "input",
      },
    ]).then((answers) => {
      fs.writeFile(`${process.cwd()}/.todosynch`, JSON.stringify(answers), (error) => {
        if (error) {
          throw error;
        }
      });
    });
} else if (program.sync) {
  inquirer.prompt(
    [
      {
        message: "Enter your password",
        name: "password",
        prefix: "init:",
        type: "password",
      },
    ]).then((answers) => {
      const files = glob.sync(`${process.cwd()}/**/.todo`)
      console.log(files)
    });
}
