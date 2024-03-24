#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });
};
async function getAnimation() {
    let animation = chalkAnimation.karaoke("Are You Ready To Play This Game?");
    await sleep();
    animation.stop();
}
await getAnimation();
let score = 0;
async function getStarted() {
    let decimal = Math.floor(Math.random() * 10);
    let Tip;
    if (decimal % 2 == 0) {
        Tip = chalk.blue("Generated Number Is Even");
    }
    else {
        Tip = chalk.green("Generated Number Is ODD");
    }
    let askQuery = await inquirer.prompt([
        {
            name: "userGuess",
            type: "number",
            message: `Please enter Your Guess B/w 1 to 10 ${Tip}`,
        },
    ]);
    console.log(chalk.bgWhite.blue(`Your Guess is ${askQuery.userGuess} And System Generated is ${decimal}`));
    if (askQuery.userGuess === decimal) {
        score++;
        console.log(chalk.yellow.bold(`Congratulation Your Your Guess is Correct. Your Score is ${score} `));
    }
    else {
        console.log(chalk.red.bold(`Your Guess is incorrect. Better Luck Next Time your score id ${score} `));
    }
}
async function start_loop() {
    do {
        await getStarted();
        var again = await inquirer.prompt({
            type: "list",
            name: "restart",
            message: "Do you want to restart ? Yes Or No ",
            choices: ["yes", "no"],
        });
    } while (again.restart === "yes");
}
await start_loop();
