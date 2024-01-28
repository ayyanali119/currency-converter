import inquirer from "inquirer";
import chalk from "chalk";

let loop = true

interface UsersInput {
    currencyInput: string,
    amountInput: number,
    currencyOutput: string
}

while (loop) {

    let userInput: UsersInput = await inquirer.prompt([{
        name: "currencyInput",
        type: "list",
        choices: [
            "Pakistani Rupee",
            "US Dollar",
            "Saudi Riyal"
        ],
        message: chalk.greenBright.italic("Select your curruncy you want to convert : ")
    },
    {
        name: "amountInput",
        type: "number",
        message: chalk.yellowBright.italic("Enter your amount you want to convert : ")
    },
    {
        name: "currencyOutput",
        type: "list",
        choices: [
            "Pakistani Rupee",
            "US Dollar",
            "Saudi Riyal"
        ],
        message: chalk.magentaBright.italic("Select your curruncy you want to convert in : ")

    }
    ])

    const input = userInput.currencyInput
    const output = userInput.currencyOutput
    const amount = userInput.amountInput


    if (input === "Pakistani Rupee") {
        if (output === "US Dollar") {
            console.log(chalk.yellowBright.bold(`The ${amount} Pakistani Rupee is ${amount / 279} in US Dollar`))
        } else if (output === "Saudi Riyal") {
            console.log(chalk.green.bold(`The ${amount} Pakistani Rupee is ${amount / 74} in Saudi Riyal`))
        } else {
            console.log(chalk.inverse(amount,`ja ja tur ja`))
        }

    } else if (input === "US Dollar") {
        if (output === "Pakistani Rupee") {
            console.log(chalk.red.bold(`The ${amount} US Dollar is ${amount * 279} in Pakistani Rupee`))
        } else if (output === "Saudi Riyal") {
            console.log(chalk.yellow.bold(`The ${amount} US Dollar is ${amount * 3.75} in Saudi Riyal`))
        } else {
            console.log(chalk.inverse(amount,`ja ja tur ja`))
        }
    }
    else if (input === "Saudi Riyal") {
        if (output === "Pakistani Rupee") {
            console.log(chalk.cyan.bold(`The ${amount} Saudi Riyal is ${amount * 74} in Pakistani Rupee`))
        } else if (output === "US Dollar") {
            console.log(chalk.yellow.bold(`The ${amount} Saudi Riyal is ${amount / 3.75} in Pakistani Rupee`))
        } else {
            console.log(chalk.inverse(amount,`ja ja tur ja`))
        }
    };


    const keepConverting = await inquirer.prompt({
        type: "confirm",
        name: "convertMore",
        message:chalk.red.bold( "Do you want to convert more ??"),
        default: false
    })

    if (!keepConverting.convertMore) {
        loop = false
    }
}