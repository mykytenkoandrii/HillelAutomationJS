import chalk from 'chalk';

let red = Math.floor(Math.random() * 256);;
let green = 0;
let blue = 255;

for (let i = 0; i <= 20; i++)
{
    green = green + 12;
    blue = blue - 12;

    console.log(chalk.rgb(red, green, blue).inverse('|                                                    |'));
}