#! /usr/bin/env node
import chalk from "chalk";
import showBanner from "node-banner";
import inquirer from "inquirer";
(async () => {
    await showBanner("Number Gussing Game", "Guess the number, challenge your wits! TypeScript fun awaits!", "red", "blue");
    let score = 0;
    let condition = true;
    async function started() {
        let generatdNumber = Math.floor(Math.random() * 10);
        let Tip;
        if (generatdNumber % 2 == 0) {
            console.log(chalk.blue.bold("\n                     -------------------------"));
            console.log(chalk.bgBlue.white(`\t\t\tTip Number Is Even`));
            console.log(chalk.blue.bold("                     -------------------------"));
        }
        else {
            console.log(chalk.green.bold("\n                     -------------------------"));
            console.log(chalk.bgGreen.white(`\t\t\tTip Number Is odd`));
            console.log(chalk.green.bold("                     -------------------------"));
        }
        let answer = await inquirer.prompt({
            name: "num1",
            type: "number",
            message: chalk.yellow.bold("Enter Your Guess Number"),
            validate: (input) => {
                if (isNaN(input)) {
                    return chalk.red.bold.italic("Please Enter Numeric Number");
                }
                return true;
            }
        });
        console.log(chalk.green.bold(`Your Guess Number Is ${answer.num1} And System Generated Number Is ${generatdNumber}`));
        if (answer.num1 === generatdNumber) {
            score++;
            console.log(chalk.bgGreen.white.bold(`\n\tCongartulations Your Guess is Correct.. Your Score is ${score}`));
        }
        else {
            console.log(chalk.bgRed.white.bold(`\n\tWrong Guess!!... Try Again Your Score is ${score}\n`));
        }
    }
    async function question() {
        do {
            await started();
            var again = await inquirer.prompt({
                name: "loop",
                type: "list",
                message: "Do You Want To Continue Yes Or No",
                choices: ["Yes", "No"]
            });
        } while (again.loop === "Yes");
    }
    ;
    await question();
})();
