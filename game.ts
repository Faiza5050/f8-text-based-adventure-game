#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

class Player {
    name: string;
    fuel: number = 100;
    constructor(name: string) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel -= 25;
        this.fuel = fuel
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}

class Opponent {
    name: string;
    fuel: number = 100;
    constructor(name: string) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel -= 25;
        this.fuel = fuel
    }
    fuelIncrease() {
        this.fuel += 25;
    }
}

console.log(
    chalk.bold.bgRed.underline("\n\tWellcome To Adventure Game "),
    chalk.yellowBright("BY"),
    chalk.bold.bgRed.underline("FAIZA KANWAL\n")
);

let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please Enter your Name: "
    }
])

let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select Your Opponent",
        choices: ["Skeleton", "Alien", "Zombie", "Warrior"]
    }
])

let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)

    if (opponent.select == "Skeleton") {
        console.log(`\t ${chalk.bold.magenta(p1.name)} \n\t   VS \n\t ${chalk.bold.magenta(o1.name)}`);
    }
    if (opponent.select == "Alien") {
        console.log(`\t ${chalk.bold.magenta(p1.name)} \n\t   VS \n\t ${chalk.bold.magenta(o1.name)}`);
    }
    if (opponent.select == "Zombie") {
        console.log(`\t ${chalk.bold.magenta(p1.name)} \n\t   VS \n\t ${chalk.bold.magenta(o1.name)}`);
    }
    if (opponent.select == "Warrior") {
        console.log(`\t ${chalk.bold.magenta(p1.name)} \n\t   VS \n\t ${chalk.bold.magenta(o1.name)}`);
    }
        console.log(chalk.bold.yellow(`\n ${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.yellow(` ${o1.name} fuel is ${p1.fuel}`));

do{
    // Skeleton
    if (opponent.select == "Skeleton") {
                
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "\n What would you like to do? ",
                choices: ["Attack", "Drink Portion", "Run For Life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecrease()
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));

                if (p1.fuel <= 0) {
                    console.log(chalk.bold.bgGray("\n You Loose! Better Luck Next Time."));
                    console.log(chalk.bold.red("\t === Game Over === \t"));
                    process.exit()
                }
            }
            if (num <= 0) {
                o1.fuelDecrease()
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));

                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green("\n //*\*\\ Congratulation! You Won.\\*\*//"));
                    process.exit()
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease()
            console.log(chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run For Life..") {
            console.log(chalk.bold.bgGray("\n You Loose! Better Luck Next Time."));
            console.log(chalk.bold.red("\t === Game Over === \t"));
            process.exit()
        }
    }

    // Alien
    if (opponent.select == "Alien") {
                
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "\n What would you like to do? ",
                choices: ["Attack", "Drink Portion", "Run For Life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecrease()
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));

                if (p1.fuel <= 0) {
                    console.log(chalk.bold.bgGray("\n You Loose! Better Luck Next Time."));
                    console.log(chalk.bold.red("\t === Game Over === \t"));
                    process.exit()
                }
            }
            if (num <= 0) {
                o1.fuelDecrease()
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));

                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green("\n //*\*\\ Congratulation! You Won.\\*\*//"));
                    process.exit()
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease()
            console.log(chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run For Life..") {
            console.log(chalk.bold.bgGray("\n You Loose! Better Luck Next Time."));
            console.log(chalk.bold.red("\t === Game Over === \t"));
            process.exit()
        }
    }

    // Zombie
    if (opponent.select == "Zombie") {
                
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "\n What would you like to do? ",
                choices: ["Attack", "Drink Portion", "Run For Life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecrease()
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));

                if (p1.fuel <= 0) {
                    console.log(chalk.bold.bgGray("\n You Loose! Better Luck Next Time."));
                    console.log(chalk.bold.red("\t === Game Over === \t"));
                    process.exit()
                }
            }
            if (num <= 0) {
                o1.fuelDecrease()
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));

                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green("\n //*\*\\ Congratulation! You Won.\\*\*//"));
                    process.exit()
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease()
            console.log(chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run For Life..") {
            console.log(chalk.bold.bgGray("\n You Loose! Better Luck Next Time."));
            console.log(chalk.bold.red("\t === Game Over === \t"));
            process.exit()
        }
    }
    
    // Warrior
    if (opponent.select == "Warrior") {
                
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "\n What would you like to do? ",
                choices: ["Attack", "Drink Portion", "Run For Life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecrease()
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));

                if (p1.fuel <= 0) {
                    console.log(chalk.bold.bgGray("\n You Loose! Better Luck Next Time."));
                    console.log(chalk.bold.red("\t === Game Over === \t"));
                    process.exit()
                }
            }
            if (num <= 0) {
                o1.fuelDecrease()
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));

                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green("\n //*\*\\ Congratulation! You Won.\\*\*//"));
                    process.exit()
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease()
            console.log(chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run For Life..") {
            console.log(chalk.bold.bgGray("\n You Loose! Better Luck Next Time."));
            console.log(chalk.bold.red("\t === Game Over === \t"));
            process.exit()
        }
    }
}
while(true);
